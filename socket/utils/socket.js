let user = [];
module.exports.addUser = (userId, socketId) => {
  if (!user.some((data) => data.userId === userId) && userId) {
    let data = { userId, socketId };
    user.push(data);
    console.log(user);
  } else {
    return;
  }
};

module.exports.removeUser = (socketId) => {
  console.log(`${socketId} is disconnected`);
  user = user.filter((data) => data.socketId !== socketId);
};

module.exports.findUsers = (userId) => {
  return user.find((data) => data.userId === userId);
};