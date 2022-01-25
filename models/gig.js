const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gigSchema = new Schema({
    gigName: {type: String},
    name: { type: String },
    phoneNum: { type: String, required: true },
    email: { type: String },
    dateBooked: { type: Date, default: Date.now },
    date: { type: String },
    addOne: { type: String, required: false },
    addTwo: { type: String, required: false },
    city: { type: String, required: false },
    endTime: { type: String, required: false },
    startTime: { type: String, required: false },
    usState: { type: String },
    zip: { type: String, required: false },
    gigDate: Date, //'2002-12-09'
    userNotes: { type: String, required: false },

});


const Gig = mongoose.model("Gig", gigSchema);

module.exports = Gig;