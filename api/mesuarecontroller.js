const db = require('../config/database');
const mesuare = db.mesuare;

exports.create = (req, res) => {
    const { id, description } = req.body
    mesuare.create({
        id,
        description
    }).then(mesuare => {
        res.send(mesuare)
    })
};

exports.findAll = (req, res) => {
    mesuare.findAll().then(m => m.map(({ id, description }) => ({ id, name: description })))
        .then(mes => res.send(mes))
};


exports.findById = (req, res) => {
    const id = req.params.id;
    mesuare.findAll(
        { where: { id } }
    ).then(m => m.map(({ id, description }) => ({ id, name: description })))
    .then(mes => res.send(mes))
};
