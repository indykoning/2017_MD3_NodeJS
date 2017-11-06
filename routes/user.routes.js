var user = require('../controllers/user.controller');
module.exports = function(app) {
    app.use(user.middle);

    app.route('/').get(function (req, res) {
       res.send('<a href="/users">view users</a>');
    });
        app.route('/users')
        .get(user.list);

    app.route('/users/:userID')
        .get(user.read);

    app.param('userID', user.getUserByID);
};
