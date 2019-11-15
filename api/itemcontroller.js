const db = require('../config/database');
const item = db.item;

/**
 * @swagger
 * /deleteUser:
 *   delete:
 *     tags:
 *       - Users
 *     name: Delete User
 *     summary: Delete user
 *     security:
 *       - bearerAuth: []
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         in: query
 *         schema:
 *           $ref: '#/definitions/User'
 *           type: string
 *         required:
 *           - username
 *     responses:
 *       '200':
 *         description: User deleted from db
 *       '403':
 *         description: Authentication error
 *       '404':
 *         description: No user in db with that name
 *       '500':
 *         description: Problem communicating with db
 */



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
		name: name,
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

