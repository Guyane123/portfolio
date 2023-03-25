const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", require("./routes/post.routes"));

app.listen(3000, () => {
    console.log("listening on http://localhost:3000");
});
