import { Clientes } from "../models/Clientes.js";
/*import { Task } from "../models/Task.js";*/


/* Routes
router.post("/", createClientes);
router.get("/", getClientes);
router.put("/:id", updateClientes);
router.delete("/:id", deleteCliente);
router.get("/:id", getCliente);*/



export async function getClientes(req, res) {
  console.log("inicio clientes");
  try {
    const xClientes = await Clientes.findAll({
      atributes: ["id" , "apellido",	"nombres", "pais", "localidad", "direccion", "cp", "telefono", "email", "usuario", "password", "facebook", "instagram" , "notas_int" , "falta", "halta"],
    });
    res.json(xClientes);
  } catch (error) {
    console.log("error detectado")
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createClientes(req, res) {
  const { id , apellido,	nombres, pais, localidad, direccion, cp, telefono, email, usuario, password, facebook, instagram , notas_int , falta, halta } = req.body;
 
 
  try {
    let newClientes = await Clientes.create(
      {
        id , 
        apellido,
        nombres,
        pais,
        localidad,
        direccion,
        cp,
        telefono,
        email,
        usuario,
        password,
        facebook,
        instagram,
        notas_int,
        falta,
        halta
        
      },
      
    );
    return res.json(newClientes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}





export async function getCliente(req, res) {
  const { id } = req.params;
  try {
    const Cliente = await Clientes.findOne({
      where: {
        id,
      },
    });
    res.json(Cliente);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateClientes = async (req, res) => {
  try {
    const { id } = req.params;
    const { apellido,	nombres, pais, localidad, direccion, cp, telefono, email, usuario, password, facebook, instagram , notas_int , falta, halta } = req.body;

    const clientes = await Clientes.findByPk(id);
    
    
    
    clientes.apellido=apellido;
clientes.nombres=nombres;
clientes.pais=pais;
clientes.localidad=localidad;
clientes.direccion=direccion;
clientes.cp=cp;
clientes.telefono=telefono;
clientes.email=email;
clientes.usuario=usuario;
clientes.password=password;
clientes.facebook=facebook;
clientes.instagram=instagram;
clientes.notas_int=notas_int;
clientes.falta=falta;
clientes.halta=halta;
    
    await clientes.save();

    res.json(clientes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteCliente(req, res) {
  const { id } = req.params;
  try {
    
    await Clientes.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


