const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;

connectDB();

const app = express();

app.use(express());




app.use("/post", require("./routes/post.routes"));




app.listen(port, () => console.log("le serveur a démarré au port" + port));
