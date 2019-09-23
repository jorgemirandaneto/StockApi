const db = require('../config/database');
const item = db.item;

exports.findAll = (req, res) => {
	item.findAll().then(itens => {	  
	  res.send(itens);
	});
};
