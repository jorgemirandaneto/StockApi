const db = require('../config/database');
const item = db.item;

exports.create = (req, res) => {
	const { id, name, amount, mesuare_id } = req.body
	item.create({
		id,
		name,
		amount,
		mesuare_id
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
	const id = req.params.id;
	item.findAll(
		{
			where: { id },
			include: [{
				model: db.mesuare
			}]
		},
	).then(item => item.map(({ id, name, amount, Mesuare }) => ({
		id: id,
		nome: name,
		amount: amount,
		mesuare: {
			id: Mesuare.id,
			name: Mesuare.description
		}
	}))).then(itens => res.send(itens))
};

exports.update = (req, res) => {
	const id = req.params.id;
	const { name, amount, mesuare_id } = req.body
	item.update({
		name,
		amount,
		mesuare_id
	},
		{ where: { id } }

	).then(() => {
		res.status(200).send(`Update item id:${id}`)
	})
};

exports.delete = (req, res) => {
	const id = req.params.id;
	item.destroy(
		{
			where: { id },
			truncate: false
		},
	).then(() => {
		res.status(200).send(`Delete item id:${id}`)
	})
};

