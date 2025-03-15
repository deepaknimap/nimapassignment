import React, { useEffect, useRef, useState } from "react";
import "./Message.css"; // Import CSS
import axios from "axios";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";

const conUrl = "http://localhost:8000/api/conversation";
const msgUrl = "http://localhost:8000/api/message";
const socketUrl = "ws://localhost:8000";

const Message = () => {
  const userId = useSelector((state) => state.user.user._id);

  const [friends, setFriends] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [input, setInput] = useState("");

  const socket = useRef(null);
  const messagesEndRef = useRef(null); // Ref for scrolling

  useEffect(() => {
    socket.current = io(socketUrl);
    socket.current.emit("greeting", { id: userId });

    socket.current.on("greeting", (message) => {
      console.log(message);
    });

    socket.current.on("message", (data) => {
      console.log("New message received:", data);
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.current.disconnect();
    };
  }, [userId]);

  useEffect(() => {
    async function fetchConversations() {
      try {
        let response = await axios.get(`${conUrl}/${userId}`);
        setFriends(response.data.data);
      } catch (error) {
        console.error("Error fetching conversations:", error);
      }
    }
    fetchConversations();
  }, []);

  const fetchMessages = async (conversationId) => {
    try {
      let response = await axios.get(`${msgUrl}/${conversationId}`);
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
    fetchMessages(conversation._id);
  };

  const handleSendMessage = async () => {
    if (input.trim() !== "" && selectedConversation) {
      try {
        let newMessage = {
          text: input,
          conversationId: selectedConversation._id,
          userId,
          friendId: selectedConversation.members.find(
            (member) => member._id !== userId
          )?._id,
        };

        let response = await axios.post(`${msgUrl}`, newMessage);

        const sentMessage = response.data.newMassage;

        setMessages([...messages, sentMessage]);

        setInput("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  // Function to scroll to the bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll when messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-app">
      <div className="sidebar">
        <ul>
          {friends.map((friend) => (
            <li
              key={friend._id}
              className={
                selectedConversation?._id === friend._id ? "active" : ""
              }
              onClick={() => handleSelectConversation(friend)}
            >
              <img
                src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                alt={friend.members[0].username}
                className="avatar"
              />
              <span>{friend.members[0].username}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="chat-section">
        {selectedConversation ? (
          <div className="chat-container">
            <div className="chat-header">
              <img
                src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"
                alt={selectedConversation.members[0].username}
                className="avatar"
              />
              <span>{selectedConversation.members[0].username}</span>
            </div>
            <div className="chat-box">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${
                    msg.userId === userId ? "me" : "other"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {/* Invisible div to track scrolling */}
              <div ref={messagesEndRef}></div>
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        ) : (
          <div className="no-chat">Select a friend to start chatting</div>
        )}
      </div>
    </div>
  );
};

export default Message;