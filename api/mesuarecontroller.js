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


exports.update = (req, res) => {
    const id = req.params.id;
    const { id, description } = req.body
    mesuare.update({
        id,
        description
    },
        {where : {id}}
    ).then(() =>{
        res.status(200).send(`Update mesuare id:${id}`)
    })
};

exports.delete = (req, res) => {
    const id = req.params.id;
	mesuare.destroy(
		{
			where: { id },
			truncate: false
		},
	).then(() => {
		res.status(200).send(`Delete mesuare id:${id}`)
	})
};