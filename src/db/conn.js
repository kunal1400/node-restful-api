const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/olympics").then(() => {
    console.log(`mongodb connected`);
}).catch(() => {
    console.log(`Error while connect to mongodb`);
})