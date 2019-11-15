const item = require('../api/itemcontroller')
const mesuare = require('../api/mesuarecontroller')

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


 /**
 * @swagger
 * /loginUser:
 *   post:
 *     tags:
 *       - Item
 *     name: Login
 *     summary: Logs in a user
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/User'
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *             password:
 *               type: string
 *               format: password
 *         required:
 *           - username
 *           - password
 *     responses:
 *       '200':
 *         description: User found and logged in successfully
 *       '401':
 *         description: Bad username, not found in db
 *       '403':
 *         description: Username and password don't match
 */



module.exports = function (app) {

    app.get('/api/item', item.findAll);

    app.post('/api/item', item.create);

    app.get('/api/item/:id', item.findById);

    app.put('/api/item/:id', item.update);

    app.delete('/api/item/:id', item.delete);

    app.post('/api/mesuare', mesuare.create);

    app.get('/api/mesuare', mesuare.findAll);

    app.get('/api/mesuare/:id', mesuare.findById);
}   