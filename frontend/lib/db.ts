import mongoose from "mongoose";

const connectDb = async () => {
  try {
    if (mongoose.connections && mongoose.connections[0].readyState) return;
    const { connection } = await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI!);
    console.log("Connected to database:", connection.name);
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw new Error("Failed to connect to database");
  }
};

export default connectDb;
