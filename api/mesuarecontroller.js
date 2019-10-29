const db = require('../config/database');
const mesuare = db.mesuare;

exports.create = (req, res) => {
    mesuare.create({
        description: req.body.description
    }).then(mesuare => {
        res.send(mesuare)
    })
};

exports.findAll = (req, res) => {
    mesuare.findAll().then(mesuares => {
        res.send(mesuares)
    })
}; 

