import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userAPI from "./api/userAPI.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 6000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/user",userAPI);

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("open", () => {
    console.log("Mongodb connection success!");
});
connection.on("error", (err) => {
    console.error("Mongodb connection error:", err);
});
connection.on("disconnected", () => {
    console.log("Mongodb disconnected");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})