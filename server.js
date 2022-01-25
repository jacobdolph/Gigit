const express = require("express");
const mongoose = require("mongoose");
const fs = require('fs');
require('dotenv').config();
const { auth } = require('express-openid-connect');
const routes = require('./routes')
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/giglist");

app.listen(PORT, function () { console.log("Listening to PORT" + PORT) });