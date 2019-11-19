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
 *     name: Lista todos os itens
 *     summary: Lista todos os itens
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

 /////mesuare

 /**
 * @swagger
 * /api/mesuare:
 *   post:
 *     tags:
 *       - Mesuare
 *     name: Item
 *     summary: Criar novo Mesuare
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Mesuare   
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             description:
 *               type: string
 *         required:
 *           - description
 *     responses:
 *       '200':
 *         description: Ok!
 */

 /**
 * @swagger
 * /api/mesuare:
 *   get:
 *     tags:
 *       - Mesuare
 *     name: Lista todos os mesuares
 *     summary: Lista todos os mesuares
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
* /api/mesuare/{id}:
*   get:
*     tags:
*       - Mesuare
*     name: Selecionar mesuare
*     summary: Seleciona mesuare
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
 * /api/mesuare/{id}:
 *   delete:
 *     tags:
 *       - Mesuare
 *     name: Deleta mesuare
 *     summary: Deleta mesuare
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
 * /api/mesuare/{id}:
 *   put:
 *     tags:
 *       - Mesuare
 *     name: Atualiza mesuare
 *     summary: Atualiza mesuare
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true     
 *       - name: Mesuare   
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             description:
 *               type: string           
 *         required:
 *           - description
 *     responses:
 *       '200':
 *         description: Ok!
 *
 */
