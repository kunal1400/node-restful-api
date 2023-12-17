const mongoose = require("mongoose");

const MenSchema = new mongoose.Schema({
    ranking: {
        type: Number,
        unique: true,
        required: true,
        min: 1,
        max: 1000
    },
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    dob: {
        type: Date,
        required: true,
        trim: true
    },    
    createdAt: {
        type: Date,
        default: Date.now()
    },
    addedBy: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    rankingBuffer: {
        type: Buffer,
    },
    eventsPlayed: {
        type: [String]
    },
    socialMediaHandle: {
        type: Map,
        of: Number
    },
    mixedObject: {
        type: mongoose.SchemaTypes.Mixed
    }
})

const MenRanking = new mongoose.model("MenRanking", MenSchema);

module.exports = MenRanking;