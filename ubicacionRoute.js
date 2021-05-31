module.exports = app => {
    const ubicacion = require('./ubicacionController.js');

    app.get('/ubicacion', ubicacion.findAll);

    app.get('/ubicacion/:ubicacionid', ubicacion.findOne);

    app.post('/ubicacion', ubicacion.create);

    app.put('/ubicacion/:ubicacionid', ubicacion.update);

    app.delete('/ubicacion/:ubicacionid', ubicacion.removeOne);

    app.delete('/ubicacion', ubicacion.removeAll);
}
