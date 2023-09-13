const express = require('express');
const dotenv = require('dotenv');
const app = express();
const path = require('path');
const artRoutes = require('./routes/art-routes');
const { dbConnect } = require('./controllers/db-controller');

dotenv.config({ path: __dirname + '/.env' });
dbConnect();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(artRoutes);


app.listen(3000, () => {
    console.log("Running on port: 3000");
});