const express = require("express");
const dotenv = require("dotenv");
const sendEmailRoute = require("./route/sendEmailRoute");
const path = require("node:path");

const app = express();

// configuration
dotenv.config({path: path.join(__dirname, ".env")});

// EVN variables
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());

// route middleware
app.use("/api", sendEmailRoute);

app.listen(PORT, () => {
    console.log(`Sever running on http://localhost:${PORT}`);
})