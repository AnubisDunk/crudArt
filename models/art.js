const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artSchema = new Schema({
    title: String,
    image: String,
    description: String
});

module.exports = mongoose.model('art', artSchema);