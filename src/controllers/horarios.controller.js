import { Horarios } from "../models/Horarios.js";
/*import { Task } from "../models/Task.js";*/


/* Routes
router.post("/", createHorarios);
router.get("/", getHorarios);
router.put("/:id", updateHorarios);
router.delete("/:id", deleteHorario);
router.get("/:id", getHorario);*/



export async function getHorarios(req, res) {
  console.log("inicio horarios");
  try {
    const xHorarios = await Horarios.findAll({
      atributes: ["id" ,"id_veterinario",	"fechaguardia","descripcion","falta" ,"halta"],
    });
    res.json(xHorarios);
  } catch (error) {
    console.log("error detectado")
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createHorarios(req, res) {
  const {id ,id_veterinario,	fechaguardia,descripcion,falta ,halta  } = req.body;
 
 
  try {
    let newHorarios = await Horarios.create(
      {
        id ,
        id_veterinario,
        fechaguardia,
        descripcion,
        falta ,
        halta ,
        
      },
      
    );
    return res.json(newHorarios);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}





export async function getHorario(req, res) {
  const { id } = req.params;
  try {
    const Horario = await Horarios.findOne({
      where: {
        id,
      },
    });
    res.json(Horario);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateHorarios = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_veterinario,fechaguardia,descripcion,falta ,halta } = req.body;

    const horario = await Horarios.findByPk(id);
    horario.id=id ;
    horario.id_veterinario=id_veterinario;
    horario.fechaguardia=fechaguardia;
    horario.descripcion=descripcion;
    horario.falta=falta ;
    horario.halta=halta ;
    
    await horario.save();

    res.json(horario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteHorario(req, res) {
  const { id } = req.params;
  try {
    
    await Horarios.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


