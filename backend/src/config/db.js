import mongoose from "mongoose";

// Crear constante que almacena el estado de conectividad de la DB.
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo DB, conectado.")
    } catch (error) {
        console.error(error);

        process.exit(1);
    }
}
export default connectDB;