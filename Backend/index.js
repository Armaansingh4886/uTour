import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from './routes/tour.js';
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/review.js";
import bookingsRoute from "./routes/bookings.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
    origin:true,
    credentials:true,
}

// database connection
mongoose.set("strictQuery", false);
const connect = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017',{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log('MongoDB database connected');
    } catch (err) {
        console.log("MongoDB database connection failed", err)
    }
}

// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/review', reviewRoute);
app.use('/api/v1/bookings', bookingsRoute);

app.listen(port, () => {
    connect();
  console.log("server listning on port ", port);
});
