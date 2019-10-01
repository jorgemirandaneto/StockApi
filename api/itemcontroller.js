const db = require('../config/database');
const item = db.item;

exports.create = (req, res) => {
	item.create({
		name: req.body.name,
		aumount: req.body.aumount
	}).then(item =>
		res.send(item)
	)
}

exports.findAll = (req, res) => {
	item.findAll().then(itens => {
		res.send(itens);
	});
};

exports.findById = (req, res) => {
	item.findById(req.params.id).then(item => {
		res.send(item);
	})
};

exports.update = (req, res) => {
	const id = req.body.id;
	item.update({
		name: req.body.name,
		aumount: req.body.aumount
	},
		{ where: { id: id } }

	).then(() => {
		res.status(200).send(`Update item id:${id}`)
	})
};

exports.delete = (req, res) => {
	const id = req.body.id;
	item.destroy({},
		{ where: { id: id } }
	).then(() => {
		res.status(200).send(`Delete item id:${id}`)
	})
}
