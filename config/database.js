const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = () => {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log("db ka connection succesful"))
    .catch((error) => {
      console.log("issue in db");
      console.error(error.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
