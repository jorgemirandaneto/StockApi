const db = require('../config/database');
const item = db.item;

exports.create = (req, res) => {
	item.create({
		name: req.body.name,
		amount: req.body.amount,
		mesuareId: req.body.mesuareId
	}).then(item =>
		res.send(item)
	)
}

exports.findAll = (req, res) => {
	item.findAll({
		include: [{
			model: db.mesuare
		}]
	}).then(item => item.map(({ id, name, amount, Mesuare }) => ({
		id: id,
		nome: name,
		amount: amount,
		mesuare: {
			id: Mesuare.id,
			name: Mesuare.description
		}
	}))).then(itens => res.send(itens))
};

exports.findById = (req, res) => {
	item.findAll(
		{
			include: [{
				model: db.mesuare
			}]
		},
		{ where: { id: req.params.id } }
		).then(item => item.map(({ id, name, amount, Mesuare }) => ({
			id: id,
			nome: name,
			amount: amount,
			mesuare: {
				id_mesuare: Mesuare.id,
				name: Mesuare.description
			}
		}))).then(itens => res.send(itens))
};

exports.update = (req, res) => {
	const id = req.params.id;
	item.update({
		name: req.body.name,
		aumount: req.body.aumount,
		mesuareId: req.body.mesuareId
	},
		{ where: { id: id } }

	).then(() => {
		res.status(200).send(`Update item id:${id}`)
	})
};

exports.delete = (req, res) => {
	const id = req.params.id;
	item.destroy(
		{
			where: { id: id },
			truncate: false
		},
	).then(() => {
		res.status(200).send(`Delete item id:${id}`)
	})
};

