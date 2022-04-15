require("dotenv").config();
var couch = require("./config/database");

const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());

const dbRoutes = require("./routes/dbRoute");
const userRoutes = require("./routes/userRoute");
app.use("/db", dbRoutes);
app.use("/user", userRoutes);


module.exports = app;
