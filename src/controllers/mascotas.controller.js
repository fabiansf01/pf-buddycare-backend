import { Mascotas } from "../models/Mascotas.js";
/*import { Task } from "../models/Task.js";*/


/* Routes
router.post("/", createMascotas);
router.get("/", getMascotas);
router.put("/:id", updateMascotas);
router.delete("/:id", deleteMascota);
router.get("/:id", getMascota);*/



export async function getMascotas(req, res) {
  console.log("inicio MASCOTAS");
  try {
    const xMascotas = await Mascotas.findAll({
      atributes: ["id","id_cliente","nombre","especie","raza","edad","peso","estado","id_madre","id_padre","adjuntos","nota","chip","falta","halta"],
    });
    res.json(xMascotas);
  } catch (error) {
    console.log("error detectado")
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createMascotas(req, res) {
  const { 	id ,id_cliente,nombre,especie,raza,edad,peso,estado,id_madre,id_padre,adjuntos,nota,chip,falta,halta } = req.body;
 
 
  try {
    let newMascotas = await Mascotas.create(
      {
        id ,
        id_cliente,
        nombre,
        especie,
        raza,
        edad,
        peso,
        estado,
        id_madre,
        id_padre,
        adjuntos,
        nota,
        chip,
        falta,
        halta
        
      },
      
    );
    return res.json(newMascotas);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}





export async function getMascota(req, res) {
  const { id } = req.params;
  try {
    const Mascota = await Mascotas.findOne({
      where: {
        id,
      },
    });
    res.json(Mascota);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateMascotas = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_cliente,nombre,especie,raza,edad,peso,estado,id_madre,id_padre,adjuntos,nota,chip,falta,halta } = req.body;

    const mascota = await Mascotas.findByPk(id);
    
    mascota.id_cliente=id_cliente;
    mascota.nombre=nombre;
    mascota.especie=especie;
    mascota.raza=raza;
    mascota.edad=edad;
    mascota.peso=peso;
    mascota.estado=estado;
    mascota.id_madre=id_madre;
    mascota.id_padre=id_padre;
    mascota.adjuntos=adjuntos;
    mascota.nota=nota;
    mascota.chip=chip;
    mascota.falta=falta;
    mascota.halta=halta;
       
    
    await mascota.save();

    res.json(mascota);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteMascota(req, res) {
  
    const { id } = req.params;
    console.log("borrado de mascota nro.",id);
  try {
    
    await Mascotas.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


