const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://deepradadiya9316:Deep%402003@cluster0.gvejb.mongodb.net/blogs?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed", error.message);
    process.exit(1);
  }
};

module.exports = { connectDb };
