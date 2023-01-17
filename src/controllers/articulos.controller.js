import { Articulos } from "../models/Articulos.js";
/*import { Task } from "../models/Task.js";*/


/* Routes
router.post("/", createArticulos);
router.get("/", getArticulos);
router.put("/:id", updateArticulos);
router.delete("/:id", deleteArticulo);
router.get("/:id", getArticulo);*/



export async function getArticulos(req, res) {
  console.log("****************************** inicio articulos *************");
  try {
    const xArticulos = await Articulos.findAll({
      atributes: ["id","nombre" ,"rubro","descripcion","fotos","id_vet","precio","stock","ptoped","ptovta","overstock","evento","falta","halta","fmodif","hmodif","id_operador","estado"],
    });
    res.json(xArticulos);
  } catch (error) {
    console.log("error detectado")
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createArticulos(req, res) {
  const {id,	nombre ,rubro  ,descripcion ,fotos ,id_vet,	precio ,stock ,	ptoped ,ptovta , overstock ,evento ,falta ,	halta ,	fmodif ,hmodif,	id_operador  ,estado } = req.body;
 
 
  try {
    let newArticulos = await Articulos.create(
      {
        id,
        nombre,
        rubro,
        descripcion,
        fotos,
        id_vet,	
        precio,
        stock,
        ptoped,
        ptovta,
        overstock,
        evento,
        falta,
        halta,
        fmodif,
        hmodif,
        id_operador,
        estado,
        
      },
      
    );
    return res.json(newArticulos);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}





export async function getArticulo(req, res) {
  const { id } = req.params;
  try {
    const Articulo = await Articulos.findOne({
      where: {
        id,
      },
    });
    res.json(Articulo);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateArticulos = async (req, res) => {
  try {
    const { id } = req.params;
    const {	nombre ,rubro  ,descripcion ,fotos ,id_vet,	precio ,stock ,	ptoped ,ptovta , overstock ,evento ,falta ,	halta ,	fmodif ,hmodif,	id_operador  ,estado } = req.body;

    const articulos = await Articulos.findByPk(id);
    
    articulos.nombre=nombre;
articulos.rubro=rubro  ;
articulos.descripcion=descripcion ;
articulos.fotos=fotos ;
articulos.id_vet=id_vet;
articulos.precio=precio ;
articulos.stock=stock ;
articulos.ptoped=ptoped ;
articulos.ptovta=ptovta ;
articulos.overstock=overstock;
articulos.evento=evento;
articulos.falta=falta;
articulos.halta=halta;
articulos.fmodif=fmodif ;
articulos.hmodif=hmodif;
articulos.id_operador=id_operador;
articulos.estado=estado;
    
        
    await articulos.save();

    res.json(articulos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteArticulo(req, res) {
  const { id } = req.params;
  try {
    
    await Articulos.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


