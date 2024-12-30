import mongoose from 'mongoose';

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("Connected to MongoDB");
        })
        connection.on('error', (err) => {
            console.log("falied Connect to MongoDB");
            process.exit();
        })
    } catch (error) {
        console.log(error);
    }

}