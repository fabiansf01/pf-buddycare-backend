import Sequelize from "sequelize";

/*export const sequelize = new Sequelize(
  "buddycare", // db name,
  "postgres", // username
  "flp1179SF", // password
  {
    host: "localhost",
    port: "3308",
    dialect: "postgres",
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    // logging: false,
  }
);*/




export const sequelize = new Sequelize(
  `postgres://djqjleey:x_ZBCp-Ew1Z8G3CCxyvX2cXNEGOtfPBZ@motty.db.elephantsql.com/djqjleey`,
  {
    logging: false,
    native: false,
  }
);