import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
  await sequelize.sync({force: false});
  app.listen(3001);
  console.log("escuchando en puerto 3001");
}

main();
