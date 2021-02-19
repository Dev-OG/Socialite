const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@socialite.2lkg8.mongodb.net/socialite",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreativeIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to MongoDB connect", err));
