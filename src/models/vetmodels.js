const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
 

sequelize.define("pfvet_clientes" , {
	id : {type: DataTypes.INTEGER, primaryKey: true, allowNull: false},
	apellido : { type: DataTypes.STRING,  allowNull: false},
	nombres: {type: DataTypes.STRING,  allowNull: false},
	país  : {type: DataTypes.STRING,  allowNull: false},
	localidad: {type: DataTypes.STRING,  allowNull: false},
	direccion : {type: DataTypes.STRING,  allowNull: false},
	cp : {type: DataTypes.STRING,  allowNull: false},
	telefono : {type: DataTypes.STRING},   
	email : {type: DataTypes.STRING,  allowNull: false},
	usuario  : {type: DataTypes.STRING,  allowNull: false},
	password  : {type: DataTypes.STRING,  allowNull: false},
	facebook  : {type: DataTypes.STRING},
	instagram  : {type: DataTypes.STRING},
	notas_int  : {          type:DataTypes.STRING   } ,
	falta   : {             type:DataTypes.DATEONLY , allowNull: false } ,
	halta  : {              type:DataTypes.TIME,  allowNull: false}  
	
});

sequelize.define("pfvet_mascotas" , {
	id  : {type: DataTypes.INTEGER,primaryKey: true, allowNull: false}  ,
	id_cliente : {type: DataTypes.INTEGER,  allowNull: false}  ,
	nombre  : {type: DataTypes.STRING,  allowNull: false}  ,
	especie : {type: DataTypes.STRING,  allowNull: false}  ,
	raza  : {type: DataTypes.STRING,  allowNull: false}  ,
	edad : {type: DataTypes.INTEGER,  allowNull: false}  ,
	peso  : {type: DataTypes.INTEGER},
	estado  : {type: DataTypes.STRING,  allowNull: false}  ,
	id_madre : {type: DataTypes.INTEGER},
	id_padre : {type: DataTypes.INTEGER},
	adjuntos : {     type:DataTypes.STRING  }  ,
	nota : {                 type:DataTypes.STRING }   ,
	chip : {type: DataTypes.INTEGER},
	falta : {                type:DataTypes.DATEONLY }   ,
	halta : {                type:DataTypes.TIME}    ,
	
});
 
 sequelize.define("pfvet_articulos" , {
	id   : {type: DataTypes.INTEGER, primaryKey: true, allowNull: false}  ,
	nombre : {type: DataTypes.STRING,  allowNull: false}  ,
	rubro  : {type: DataTypes.INTEGER,  allowNull: false}  ,
	descripcion : {           type:DataTypes.STRING , allowNull: false } ,
	fotos : {                type:DataTypes.STRING }   ,
	id_vet : {type: DataTypes.INTEGER,  allowNull: false}  ,
	precio  : {type:DataTypes.DECIMAL,  allowNull: false}  ,
	
	stock  :{type: DataTypes.INTEGER,  allowNull: false},              
	ptoped :{type: DataTypes.INTEGER,  allowNull: false},
	ptovta   :{type: DataTypes.INTEGER,  allowNull: false},
	overstock : {              type: DataTypes.STRING},
	evento  : {type: DataTypes.STRING},    
	falta  : {type:DataTypes.DATEONLY, allowNull: false } ,
	halta : {  type:DataTypes.TIME,  allowNull: false}  ,
	fmodif : {               type:DataTypes.DATEONLY , allowNull: false}  ,
	hmodif  : {              type:DataTypes.TIME , allowNull: false}  ,
	id_operador : {          type: DataTypes.INTEGER, allowNull: false}  ,
	estado : {              type: DataTypes.STRING},
	
  });

sequelize.define("pfvet_veterinarios" , {
	id : {type: DataTypes.INTEGER, primaryKey: true, allowNull: false}  ,
	nombre : {type: DataTypes.STRING,  allowNull: false}  ,
	nota : { type:DataTypes.STRING}    ,
	telefono : { type: DataTypes.STRING}    ,
	email : { type: DataTypes.STRING}    ,
	falta : { type:DataTypes.DATEONLY }   ,
	halta : {type:DataTypes.TIME}    ,
	
});
 
 sequelize.define("pfvet_veterinarias" , {
	id  : {type: DataTypes.INTEGER, primaryKey: true, allowNull: false}  ,
	razon : {type: DataTypes.STRING,  allowNull: false}  ,
	responsable : {type: DataTypes.STRING,  allowNull: false}  ,
	provincia : {type: DataTypes.STRING},
	localidad : {type: DataTypes.STRING,  allowNull: false}  ,
	direccion : {type: DataTypes.STRING,  allowNull: false}  ,
	telefono  : {type: DataTypes.STRING,  allowNull: false}  ,
	facebook  : {type: DataTypes.STRING}    ,
	instagram : {type: DataTypes.STRING}    ,
	descripcion  : {type: DataTypes.STRING}    ,
	fotos : {type:DataTypes.STRING}    ,
	falta : { type:DataTypes.DATEONLY}    ,
	halta : { type:DataTypes.TIME }   ,
	estado : { type: DataTypes.STRING}    ,
	usuario : {type: DataTypes.STRING}    ,
	password : {type: DataTypes.STRING,  allowNull: false}  ,
	email  : { type: DataTypes.STRING,  allowNull: false}  ,
	
});
 
sequelize.define("pfvet_operadores" , {
	id  : {type: DataTypes.INTEGER, primaryKey: true, allowNull: false}  ,
	nombre  : { type: DataTypes.STRING},   
	usuario : { type: DataTypes.STRING,  allowNull: false}  ,
	password : {type: DataTypes.STRING, allowNull: false}  ,
	email  : { type: DataTypes.STRING,  allowNull: false}  ,
	rol  : { type:DataTypes.STRING}    ,
	estado : { type: DataTypes.STRING,  allowNull: false}  ,
	falta : {type:DataTypes.DATEONLY , allowNull: false}  ,
	halta  : {type:DataTypes.TIME}    ,
	
});
 
sequelize.define("pfvet_rubros", { 
	id  : { type: DataTypes.INTEGER,primaryKey: true, allowNull: false } ,
	descripcion  : {type: DataTypes.STRING,  allowNull: false}  ,
	foto  : {type: DataTypes.STRING,  allowNull: false}  ,
	estado  : {type: DataTypes.STRING},   
	
});
 
 sequelize.define("pfvet_carritos", { 
	id  : {type: DataTypes.INTEGER, primaryKey: true, allowNull: false}  ,
	id_cliente : {type: DataTypes.INTEGER, allowNull: false } ,
	id_articulo  : {type: DataTypes.INTEGER,  allowNull: false}  ,
	cantidad:  {type: DataTypes.INTEGER,  allowNull: false}  ,
	comfav : {type: DataTypes.STRING}    ,
	falta  : {  type:DataTypes.DATEONLY }   ,
	halta  : {               type:DataTypes.TIME  }  ,
	fvto  : {                type:DataTypes.DATEONLY }   ,
	
});
 
 sequelize.define("pfvet_historia_clinica", { 
	id  : {                  type: DataTypes.INTEGER, primaryKey: true, allowNull: false } ,
	id_mascota  : {         type: DataTypes.INTEGER,  allowNull: false } ,
	id_veterinario  : {     type: DataTypes.INTEGER}    ,
	nomenclador : {         type: DataTypes.STRING,  allowNull: false}  ,
	descripcion : {          type:DataTypes.STRING , allowNull: false}  ,
	falta  : {               type:DataTypes.DATEONLY},    
	faccion  : {             type:DataTypes.DATEONLY , allowNull: false}  ,
	halta : {                type:DataTypes.TIME},    
	adjuntos : {             type:DataTypes.STRING }   ,
	
});
 
 };
