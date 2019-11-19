/**
 * @swagger
 * /api/item:
 *   post:
 *     tags:
 *       - Item
 *     name: Item
 *     summary: Criar novo Item
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Item   
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             mesuare_id:
 *               type: integer
 *             amount:
 *               type: integer
 *         required:
 *           - name
 *           - mesuare_id
 *           - amount
 *     responses:
 *       '200':
 *         description: Ok!
 */
/**
 * @swagger
 * /api/item:
 *   get:
 *     tags:
 *       - Item
 *     name: Find user
 *     summary: Finds a user
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     responses:
 *       '200':
 *         description: Lista todos os itens
 */

/**
 * @swagger
 * /api/item/{id}:
 *   get:
 *     tags:
 *       - Item
 *     name: Selecionar item
 *     summary: Seleciona item
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true 
 *     responses:
 *       '200':
 *         description: Retorna o objeto selecionado.
 */

 /**
 * @swagger
 * /api/item/{id}:
 *   delete:
 *     tags:
 *       - Item
 *     name: Deleta Item
 *     summary: Deleta Item
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required:
 *           - id
 *     responses:
 *       '200':
 *         description: Ok!
 */

/**
 * @swagger
 * /api/item/{id}:
 *   put:
 *     tags:
 *       - Item
 *     name: Atualiza item
 *     summary: Atualiza item
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true     
 *       - name: Item   
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             mesuare_id:
 *               type: integer
 *             amount:
 *               type: integer
 *         required:
 *           - name
 *           - mesuare_id
 *           - amount
 *     responses:
 *       '200':
 *         description: Ok!
 *
 */
