import mongoose from "mongoose";

const mongoDBconnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongoDB connect successfully`.bgMagenta.black);
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};

//export default function
export default mongoDBconnect;
