const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: __dirname + '/.env' });

const dbConnect = () => {

    if (process.env['DB'] === "local") {
        mongoose.connect('mongodb://localhost:27017/art');
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, "connection error:"));
        db.once("open", () => {
            console.log("Database connected");
        });
    } else if (process.env['DB'] === "remote") {
        const db = process.env['MONGO_URL'];
        mongoose
            .connect(db)
            .then((res) => console.log('Connected to remote DB'))
            .catch((error) => console.log(`Error with code ${error}`));
    }
    console.log(process.env['DB']);
}


module.exports = {
    dbConnect
}