const express = require('express');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const path = require('path');
const artRoutes = require('./routes/art-routes');

dotenv.config({path: __dirname + '/.env'});
const local = true;
if (local) {
    mongoose.connect('mongodb://localhost:27017/art');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, "connection error:"));
    db.once("open", () => {
        console.log("Database connected");
    });
} else {
    const db = process.env['MONGO_URL'];
    mongoose
        .connect(db)
        .then((res) => console.log('Connected to remote DB'))
        .catch((error) => console.log(`Error with code ${error}`));
}
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(artRoutes);


app.listen(3000, () => {
    console.log("Running on port: 3000");
});