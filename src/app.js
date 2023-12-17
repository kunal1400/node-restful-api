const express = require("express");
require("./db/conn");
const mensRouter = require("./routers/mens");

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
    res.send("Hello")
});

app.use(mensRouter);


app.listen(port, () => {
    console.log(`app running on ${port}`);
});