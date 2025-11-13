const mongoose = require("mongoose")
const headlightSchema = mongoose.Schema({
manufacturer: String,
max_lumen: Number,
production_year: Date
})

module.exports = mongoose.model("Headlight", headlightSchema)