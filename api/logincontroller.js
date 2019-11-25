const db = require('../config/database');
const user = db.user;


exports.login = (req, res) => {
    const { email, password } = req.body
    user.findAll({
        where: { email, password }
    }).then(user => user.map(({email}) => ({email}))
    ).then(user => res.send(user))
};