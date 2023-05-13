// getting-started.js
const mongoose = require('mongoose');

ConnectDB().catch(err => console.log(err));

async function ConnectDB() {
  await (await mongoose.connect(process.env.MONGO_URL)).isObjectIdOrHexString((
    console.log("Database is Connected")
  ));
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


module.exports = ConnectDB