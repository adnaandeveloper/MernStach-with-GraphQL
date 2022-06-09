const mongoose = require('mongoose');

const connectDb = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  });
  console.log(
    `MongoDB Connected : ${conn.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDb;
