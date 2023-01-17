import { Rubros } from "../models/Rubros.js";
/*import { Task } from "../models/Task.js";*/


/* Routes
router.post("/", createRubros);
router.get("/", getRubros);
router.put("/:id", updateRubros);
router.delete("/:id", deleteRubro);
router.get("/:id", getRubro);*/



export async function getRubros(req, res) {
  console.log("inicio jjjjjjj");
  try {
    const xRubros = await Rubros.findAll({
      atributes: ["id", "descripcion", "foto", "estado"],
    });
    res.json(xRubros);
  } catch (error) {
    console.log("error detectado")
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createRubros(req, res) {
  const { id , descripcion, foto, estado } = req.body;
 
 
  try {
    let newRubros = await Rubros.create(
      {
        id,
        descripcion,
        foto,
        estado,
        
      },
      
    );
    return res.json(newRubros);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}





export async function getRubro(req, res) {
  const { id } = req.params;
  try {
    const rubro = await Rubros.findOne({
      where: {
        id,
      },
    });
    res.json(rubro);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateRubros = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion, foto, estado } = req.body;

    const rubro = await Rubros.findByPk(id);
    rubro.descripcion = descripcion;
    rubro.foto = foto;
    rubro.estado = estado;
    await rubro.save();

    res.json(rubro);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteRubro(req, res) {
  const { id } = req.params;
  try {
    
    await Rubros.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


