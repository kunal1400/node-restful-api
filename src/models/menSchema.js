const mongoose = require("mongoose");

const MenSchema = new mongoose.Schema({
    ranking: {
        type: Number,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true,
        trim: true
    },
    country: {
        type: String,
        trim: true,
        required: true
    },
    score: {
        type: Number,
        required: true,
        trim: true
    },
    event: {
        type: String,
        default: "100m"
    }
})

const MenRanking = new mongoose.model("MenRanking", MenSchema);

module.exports = MenRanking;