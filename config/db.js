const mongoose = require("mongoose");

//database connection
const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected");
  } catch {
    console.log("Cannot connect to Database");
  }
};

module.exports = connectDb;
