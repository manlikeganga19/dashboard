import mongoose from "mongoose";
const connection = {};

export const connectToDB = async () => {
  const connect = {};
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connection[0].readyState;
  } catch (error) {
    throw new Error(error);
  }
};
