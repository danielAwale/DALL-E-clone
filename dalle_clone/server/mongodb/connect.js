import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  //this option is going to be useful in the search functionality later

  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};

export default connectDB;
