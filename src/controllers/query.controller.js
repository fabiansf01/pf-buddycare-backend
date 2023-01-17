/*import { Rubros } from "../models/Rubros.js";*/
/*import { Task } from "../models/Task.js";*/


//   --->>> const [results, metadata] = await sequelize.query("UPDATE users SET y = 42 WHERE x = 12");
// Results will be an empty array and metadata will contain the number of affected rows.

import { sequelize } from "../database/database.js";

export async function getQuery(req, res) {
    console.log("************************************inicio query*************");
    const {myQuery } = req.body;
    try {
        //const [results, metadata] = await sequelize.query("SELECT * FROM pfvet_clientes;");
        const [results, metadata] = await sequelize.query(myQuery);
        
        const mirespuesta={...results,...metadata}
        res.json(results);
        
    } catch (error) {
      console.log("error detectado")
      res.status(500).json({
        message: error.message,
      });
    }
  }