import mongoose from "mongoose";
const mongodbURI = "mongodb://localhost:27017/stock";

(async () => {
  try {
    const response = await mongoose.connect(mongodbURI);
    console.log(
      `Database connected to ${response.connection.name} at ${response.connection.host}`,
    );
  } catch (error) {
    console.log("Database connection error: ", error);
  }
})();

export default mongoose.connection;
