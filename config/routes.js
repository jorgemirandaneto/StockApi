const item = require('../api/itemcontroller')
const mesuare = require('../api/mesuarecontroller')
const user = require('../api/logincontroller')
var jwt = require('jsonwebtoken');

function verifyJWT(req, res, next){
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, process.env.SECRET, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    req.email = decoded.email;
    next();
  });
}


module.exports = function (app) {

    app.get('/api/item', verifyJWT, item.findAll);

    app.post('/api/item', item.create);

    app.get('/api/item/:id', item.findById);

    app.put('/api/item/:id', item.update);

    app.delete('/api/item/:id', item.delete);

    app.post('/api/mesuare', mesuare.create);

    app.get('/api/mesuare', mesuare.findAll);

    app.get('/api/mesuare/:id', mesuare.findById);

    app.put('/api/mesuare/:id', mesuare.update);

    app.delete('/api/mesuare/:id', mesuare.delete);

    app.post('/api/login', user.login)
}   