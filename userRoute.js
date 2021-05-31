module.exports = app => {
    const user = require('./userController.js');

    app.get('/user', user.findAll);

    app.get('/user/:userid', user.findOne);

    app.post('/user', user.create);

    app.put('/user/:userid', user.update);

    app.delete('/user/:userid', user.removeOne);

    app.delete('/user', user.removeAll);
}
