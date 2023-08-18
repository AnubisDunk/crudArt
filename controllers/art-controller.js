const Art = require('../models/art');
const getHome = (req, res) => {
    res.render('home');
}

const getArt = async(req, res) => {
    const art = new Art({title: 'New World', image: 'Url', description:'New art is here'});
    await art.save();
    res.send(art);
}

module.exports = {
    getHome,
    getArt,
};