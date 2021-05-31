const Usuarios = require("./userModel.js");

exports.findAll = (req, res) => {
  Usuarios.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Ta mal",
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  Usuarios.findById(req.params.citaid, (err, data) => {
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
  
  const user = new Usuarios({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    direccion: req.body.direccion,
  });
  console.log('nombre: ' + req.body.nombre);
  Usuarios.create(user, (err, data) => {
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

  Usuarios.updateById(req.params.userid, new Usuarios(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `no encontrado esa Usuarios ${req.params.userid}.`,
        });
      } else {
        res.status(500).send({
          message: "error al actualizar Usuarios " + req.params.userid,
        });
      }
    } else res.send(data);
  });
};

exports.removeOne = (req, res) => {
  Usuarios.deleteOne(req.params.userid, (err, data) => {
    if (data != null)
      /*res.status(500).send({
        message: 
          err.message || "Error al editar una Usuarios"
      });*/
      res.send("no hay con ese id compai");
    else res.send("data: " + data);
  });
};

exports.removeAll = (req, res) => {
  Usuarios.deleteAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "error al eliminar",
      });
    else res.send({ message: `todas las Usuarios borradas!` });
  });
};
