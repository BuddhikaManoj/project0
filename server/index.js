import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL);

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Mongodb connection success!");
});

connection.once("disconnected", () => {
    console.log("Mongodb disconnected");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})