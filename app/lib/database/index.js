import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGODB_URI);
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to db successfully")
  } catch (error) {
    console.log(error)
    throw new Error(error);
  }
};

export default connectToDB