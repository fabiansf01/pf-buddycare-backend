import { Commerce } from "../models/Commerce.js";
/*import { Task } from "../models/Task.js";*/


/* Routes
router.post("/", createCommerces);
router.get("/", getCommerces);
router.put("/:id", updateCommerces);
router.delete("/:id", deleteCommerce);
router.get("/:id", getCommerce);*/



export async function getCommerces(req, res) {
  console.log("inicio commerce");
  try {
    const xCommerces = await Commerce.findAll({
      atributes: ["id","id_cliente","id_articulo","tipo","detalle","fecha","comprobante","importe","mediopago","cuota","decuota","falta","halta"],
    });
    res.json(xCommerces);
  } catch (error) {
    console.log("error detectado")
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createCommerces(req, res) {
  const { id,id_cliente,id_articulo,tipo,detalle,fecha,	comprobante,importe,mediopago,cuota,decuota,falta,halta } = req.body;
 
 
  try {
    let newCommerces = await Commerce.create(
      {
        id,
        id_cliente,
        id_articulo,
        tipo,
        detalle,
        fecha,
        comprobante,
        importe,
        mediopago,
        cuota,
        decuota,
        falta,
        halta
        
      },
      
    );
    return res.json(newCommerces);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}





export async function getCommerce(req, res) {
  const { id } = req.params;
  try {
    const Commerce = await Commerce.findOne({
      where: {
        id,
      },
    });
    res.json(Commerce);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateCommerces = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_cliente,	id_articulo,tipo,detalle,fecha,	comprobante,importe,mediopago,cuota,decuota,falta,halta } = req.body;

    const commerce = await Commerce.findByPk(id);
    commerce.id_cliente=id_cliente;
commerce.id_articulo=id_articulo;
commerce.tipo=tipo;
commerce.detalle=detalle;
commerce.fecha=fecha;
commerce.comprobante=comprobante;
commerce.importe=importe;
commerce.mediopago=mediopago;
commerce.cuota=cuota;
commerce.decuota=decuota;
commerce.falta=falta;
commerce.halta=halta;

    await commerce.save();

    res.json(commerce);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteCommerce(req, res) {
  const { id } = req.params;
  try {
    
    await Commerce.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

