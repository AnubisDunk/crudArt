const { dbConnect } = require('./controllers/db-controller');
const Art = require('./models/art');
const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/.env' });

dbConnect();

const seedDB = async () => {
    await Art.deleteMany({});
    const a = new Art({ title: 'new Seedss', description: 'seed' });
    await a.save();
    console.log("seeding");
}

seedDB();