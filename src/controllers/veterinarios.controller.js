import { Veterinarios } from "../models/Veterinarios.js";
/*import { Task } from "../models/Task.js";*/


/* Routes
router.post("/", createVeterinarios);
router.get("/", getVeterinarios);
router.put("/:id", updateVeterinarios);
router.delete("/:id", deleteVeterinario);
router.get("/:id", getVeterinario);*/



export async function getVeterinarios(req, res) {
  console.log("inicio Veterinarios");
  try {
    const xVeterinarios = await Veterinarios.findAll({
      atributes: ["id" ,"nombre",	"nota" , 	"telefono", "email", "falta", "halta"],
    });
    res.json(xVeterinarios);
  } catch (error) {
    console.log("error detectado")
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createVeterinarios(req, res) {
  const { id ,nombre,	nota , 	telefono, 	email, 	falta, 	halta  } = req.body;
 
 
  try {
    let newVeterinarios = await Veterinarios.create(
      {
        id ,
        nombre,
        nota ,
        telefono,
        email,
        falta,
        halta
        
      },
      
    );
    return res.json(newVeterinarios);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}





export async function getVeterinario(req, res) {
  const { id } = req.params;
  try {
    const Veterinario = await Veterinarios.findOne({
      where: {
        id,
      },
    });
    res.json(Veterinario);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateVeterinarios = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre,	nota , 	telefono, 	email, 	falta, 	halta,  } = req.body;

    const veterinario = await Veterinarios.findByPk(id);
    
    
    
    veterinario.nombre=nombre;
    veterinario.nota=nota ;
    veterinario.telefono=telefono;
    veterinario.email=email;
    veterinario.falta=falta;
    veterinario.halta=halta;
    
    
    
    await veterinario.save();

    res.json(veterinario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteVeterinario(req, res) {
  const { id } = req.params;
  try {
    
    await Veterinarios.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
