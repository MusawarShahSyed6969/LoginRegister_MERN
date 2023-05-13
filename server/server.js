const dotenv = require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express();
const ConnectDB = require("./config/db")

const userRoutes = require("./router/RegisterLoginRouter")

console.log("Hello");
app.use(cors());

app.use(express.json())

app.use("/api/user", userRoutes)



const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log("Server is Running on Port " + port);
})