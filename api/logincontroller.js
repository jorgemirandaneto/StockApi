const db = require('../config/database');
var jwt = require('jsonwebtoken');
const user = db.user;

exports.login = (req, res) => {
    const { email, password } = req.body
    user.findAll({
        where: { email, password }
    }).then(user => {
      if (user[0].email === email && user[0].password === password) {
          var token = jwt.sign({email}, process.env.SECRET, {
              expiresIn: 300
          });
         res.status(200).send(`token = ${token}`); 
        }
    }).catch(u => res.status(500).send('Erro ao efetuar login')) 
};