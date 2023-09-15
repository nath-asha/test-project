// 9dzsqeZKHXxeNE4V
// mongodb+srv://omna0504:9dzsqeZKHXxeNE4V@taskcluster.8mpcsws.mongodb.net/taskman

const mongoose = require("mongoose");

const connect = mongoose
  .connect(
    "mongodb+srv://omna0504:9dzsqeZKHXxeNE4V@taskcluster.8mpcsws.mongodb.net/taskman"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

  module.exports = connect;