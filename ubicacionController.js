const Ubicacion = require("../models/ubicacionModel.js");

exports.findAll = (req, res) => {
  Ubicacion.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Ta mal",
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  Ubicacion.findById(req.params.citaid, (err, data) => {
    if (data == undefined) {
      res.send("undefined");
    } else {
      res.send(data);
    }
  });
};

exports.create = (req, res) => {
    
  if (!req.body) {
    res.status(400).send({
      message: "Vacio no",
    });
  }
  
  const user = new Ubicacion({
    nombre: req.body.nombre,
    lat: req.body.lat,
    long: req.body.long,
    user_id: req.body.user_id
  });
  console.log('nombre: ' + req.body.nombre);
  Ubicacion.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Error al crear un user",
      });
    else res.send('bien');
  });
};

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Vacio no!",
    });
  }

  Ubicacion.updateById(req.params.userid, new Ubicacion(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `no encontrado esa Ubicacion ${req.params.userid}.`,
        });
      } else {
        res.status(500).send({
          message: "error al actualizar Ubicacion " + req.params.userid,
        });
      }
    } else res.send(data);
  });
};

exports.removeOne = (req, res) => {
  Ubicacion.deleteOne(req.params.userid, (err, data) => {
    if (data != null)
      /*res.status(500).send({
        message: 
          err.message || "Error al editar una Ubicacion"
      });*/
      res.send("no hay con ese id compai");
    else res.send("data: " + data);
  });
};

exports.removeAll = (req, res) => {
  Ubicacion.deleteAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "error al eliminar",
      });
    else res.send({ message: `todas las Ubicacion borradas!` });
  });
};
