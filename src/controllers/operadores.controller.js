import { Operadores } from "../models/Operadores.js";
/*import { Task } from "../models/Task.js";*/


/* Routes
router.post("/", createOperadors);
router.get("/", getOperadors);
router.put("/:id", updateOperadors);
router.delete("/:id", deleteOperador);
router.get("/:id", getOperador);*/



export async function getOperadors(req, res) {
  console.log("inicio Operadors");
  try {
    const xOperadors = await Operadores.findAll({
      atributes: ["id",	"nombre" , 	"usuario", 	"password",	"email","rol","estado","falta","halta"  ],
    });
    res.json(xOperadors);
  } catch (error) {
    console.log("error detectado")
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createOperadors(req, res) {
  const { id,	nombre , 	usuario, 	password, 	email, 	rol, 	estado, 	falta, 	halta   } = req.body;
 
 
  try {
    let newOperadors = await Operadores.create(
      {
        id,
        nombre,
        usuario,
        password,
        email,
        rol,
        estado,
        falta,
        halta  
        
      },
      
    );
    return res.json(newOperadors);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}





export async function getOperador(req, res) {
  const { id } = req.params;
  try {
    const Operador = await Operadores.findOne({
      where: {
        id,
      },
    });
    res.json(Operador);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateOperadors = async (req, res) => {
  try {
    const { id } = req.params;
    const { 	nombre , 	usuario, 	password, 	email, 	rol, 	estado, 	falta, 	halta   } = req.body;

    const operador = await Operadores.findByPk(id);
    

  operador.nombre=nombre;
	operador.usuario=usuario;
	operador.password=password;
	operador.email=email;
	operador.rol=rol;
	operador.estado=estado;
	operador.falta=falta;
	operador.halta=halta;  

    await operador.save();

    res.json(operador);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteOperador(req, res) {
  const { id } = req.params;
  try {
    
    await Operadores.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


