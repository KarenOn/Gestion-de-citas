const sql = require('../db.js');

const Ubicacion = function(user){
    this.nombre = user.nombre;
    this.lat = user.lat;
    this.long = user.long;
    this.user_id = user.user_id;
};

Ubicacion.create = (newUbicacion, result) => {
    sql.query('INSERT INTO ubicacion SET ?', newUbicacion, (err, res) => {
        if(err){
            console.log('error: ', err);
            result(err, null);
            return;
        }
        console.log('Ubicacion creada: ', {id: res.insertId, newUbicacion});
        result(null, {id: res.insertId, newUbicacion});
    });
}

Ubicacion.getAll = result => {
    sql.query("SELECT * FROM ubicacion", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Ubicacion: ", res);
      result(null, res);
    });
}

Ubicacion.findById = (userid, result) => {
    sql.query(`SELECT * FROM ubicacion WHERE id = ${userid}`, (err, res) => {
        if(err){
            console.log('error: ', err);
            result (err, null);
            return;
        }
        
        if(res.length){
            console.log('Ubicacion: ', res);
            result(null, res);
            return;
        }

        result({kind: 'no Ubicacion'}, null);
    });
}

Ubicacion.updateById = (id, Ubicacion, result) => {
    sql.query("UPDATE ubicacions SET nombre = ?, apellido = ?, direccion = ? WHERE id = ?",
      [Ubicacion.nombre, Ubicacion.apellido, Ubicacion.direccion, id],
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
  
        console.log("Ubicacion actualizada: ", { id: id, ...Ubicacion });
        result(null, { id: id, ...Ubicacion });
      }
    );
}; 

Ubicacion.deleteOne = (userid, result) => {
    sql.query(`DELETE FROM ubicacions WHERE id = ${userid}`, (err, res) => {
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
      
        console.log("Ubicacion borrada con id: ", iduser_id);
        result(null, res);
    });
}

Ubicacion.deleteAll = result => {
    sql.query("DELETE FROM ubicacions", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
      
        console.log(`eliminadas ${res.affectedRows} Usuarioss`);
        result(null, res);
    });
}

module.exports = Ubicacion;