const express = require("express");
const app = express();
const { Server } = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const mongoose = require('mongoose');
const userRouter = require('./router/user');
const conversationRouter = require('./router/conversation');
const messageRouter = require('./router/message');
const cors = require("cors");
const cookieParser = require('cookie-parser');
const {addUser , removeUser , findUsers} = require('./utils/socket');
mongoose.connect('mongodb://127.0.0.1:27017/socket')
.then(()=>{
  console.log('database is connected')
})
.catch((err)=>{
  console.log(err.message);
})

io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});


let user = [];

console.log(findUsers)


io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("greeting", (user) => {
    addUser(user.id, socket.id);  
    io.emit("greeting", "hi from server");
  });

  socket.on("disconnect", (user) => {
    removeUser(socket.id);
  });
});



app.use(cors(
  {
    origin : 'http://localhost:5173',
    credentials : true
  }
));

app.use(express.json());
app.use(cookieParser());


app.use('/api/users' , userRouter);
app.use('/api/conversation' , conversationRouter );
app.use('/api/message' , messageRouter)

server.listen(8000, () => {
  console.log("app is running on port 8000 http://localhost:8000/");
});

console.log('serves.sj' , findUsers)

module.exports = { io, findUsers };
