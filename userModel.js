const sql = require('../db.js');

const Usuarios = function(user){
    this.nombre = user.nombre;
    this.apellido = user.apellido;
    this.direccion = user.direccion;
};

Usuarios.create = (newUsuarios, result) => {
    sql.query('INSERT INTO usuario SET ?', newUsuarios, (err, res) => {
        if(err){
            console.log('error: ', err);
            result(err, null);
            return;
        }
        console.log('Usuarios creada: ', {id: res.insertId, newUsuarios});
        result(null, {id: res.insertId, newUsuarios});
    });
}

Usuarios.getAll = result => {
    sql.query("SELECT *, CONCAT(nombre, ' ', apellido) as usuario FROM usuarios", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Usuarios: ", res);
      result(null, res);
    });
}

Usuarios.findById = (userid, result) => {
    sql.query(`SELECT c.*, CONCAT(nombre, ' ', apellido) as usuarios from usuario
    WHERE id = ${userid}`, (err, res) => {
        if(err){
            console.log('error: ', err);
            result (err, null);
            return;
        }
        
        if(res.length){
            console.log('Usuarios: ', res);
            result(null, res);
            return;
        }

        result({kind: 'no Usuarios'}, null);
    });
}

Usuarios.updateById = (id, Usuarios, result) => {
    sql.query("UPDATE usuarios SET nombre = ?, apellido = ?, direccion = ? WHERE id = ?",
      [Usuarios.nombre, Usuarios.apellido, Usuarios.direccion, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Customer with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("Usuarios actualizada: ", { id: id, ...Usuarios });
        result(null, { id: id, ...Usuarios });
      }
    );
}; 

Usuarios.deleteOne = (userid, result) => {
    sql.query(`DELETE FROM usuarios WHERE id = ${userid}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
      
        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
        }
      
        console.log("Usuarios borrada con id: ", iduser_id);
        result(null, res);
    });
}

Usuarios.deleteAll = result => {
    sql.query("DELETE FROM usuarios", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
      
        console.log(`eliminadas ${res.affectedRows} Usuarioss`);
        result(null, res);
    });
}

module.exports = Usuarios;