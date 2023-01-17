import { Historiaclinica } from "../models/Historiaclinica.js";
/*import { Task } from "../models/Task.js";*/


/* Routes
router.post("/", createHistoriaclinicas);
router.get("/", getHistoriaclinicas);
router.put("/:id", updateHistoriaclinicas);
router.delete("/:id", deleteHistoriaclinica);
router.get("/:id", getHistoriaclinica);*/



export async function getHistoriaclinicas(req, res) {
  console.log("inicio historiaclinica");
  try {
    const xHistoriaclinicas = await Historiaclinica.findAll({
      atributes: ["id","id_mascota" ,"id_veterinario"  ,  "nomenclador"  ,"descripcion" ,"falta"  , "faccion" , "halta"  , "adjuntos"  ],
    });
    res.json(xHistoriaclinicas);
  } catch (error) {
    console.log("error detectado")
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createHistoriaclinicas(req, res) {
  const { id,id_mascota ,id_veterinario  ,  nomenclador  ,descripcion ,falta  , faccion , halta  , adjuntos   } = req.body;
 
 
  try {
    let newHistoriaclinicas = await Historiaclinica.create(
      {
        id,
        id_mascota ,
        id_veterinario  , 
         nomenclador  ,
         descripcion ,
         falta  , 
         faccion ,
          halta  ,
           adjuntos  
        
      },
      
    );
    return res.json(newHistoriaclinicas);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}





export async function getHistoriaclinica(req, res) {
  const { id } = req.params;
  try {
    const xHistoriaclinica = await Historiaclinica.findOne({
      where: {
        id,
      },
    });
    res.json(xHistoriaclinica);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateHistoriaclinicas = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_mascota ,id_veterinario  ,  nomenclador  ,descripcion ,falta  , faccion , halta  , adjuntos  } = req.body;

    const historiaclinica = await Historiaclinica.findByPk(id);
   
    
    historiaclinica.id_mascota=id_mascota ;
    historiaclinica.id_veterinario=id_veterinario ;
    historiaclinica.nomenclador=nomenclador  ;
    historiaclinica.descripcion=descripcion ;
    historiaclinica.falta=falta  ;
    historiaclinica.faccion=faccion ;
    historiaclinica.halta=halta  ; 
    historiaclinica.adjuntos=adjuntos; 
   
      
    
    
    await historiaclinica.save();

    res.json(historiaclinica);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteHistoriaclinica(req, res) {
  const { id } = req.params;
  try {
    
    await Historiaclinica.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


