import { Carrito } from "../models/Carrito.js";
/*import { Task } from "../models/Task.js";*/


/* Routes
router.post("/", createCarritos);
router.get("/", getCarritos);
router.put("/:id", updateCarritos);
router.delete("/:id", deleteCarrito);
router.get("/:id", getCarrito);*/



export async function getCarritos(req, res) {
  console.log("inicio CARRITO");
  try {
    const xCarritos = await Carrito.findAll({
      atributes: ["id", "id_cliente", "id_articulo", "cantidad", 	"comfav", "falta", 	"halta", "fvto"],
    });
    res.json(xCarritos);
  } catch (error) {
    console.log("error detectado")
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createCarritos(req, res) {
  const { id, id_cliente, id_articulo, cantidad, 	comfav, falta, 	halta, 	fvto } = req.body;
 
 
  try {
    let newCarritos = await Carrito.create(
      {
        id,
        id_cliente,
        id_articulo,
        cantidad,
        comfav,
        falta,
        halta,
        fvto
        
      },
      
    );
    return res.json(newCarritos);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}





export async function getCarrito(req, res) {
  const { id } = req.params;
  try {
    const xCarrito = await Carrito.findOne({
      where: {
        id,
      },
    });
    res.json(xCarrito);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateCarritos = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_cliente, id_articulo, cantidad, 	comfav, falta, 	halta, 	fvto } = req.body;

    const carrito = await Carrito.findByPk(id);
    carrito.id_cliente=id_cliente;
    carrito.id_articulo=id_articulo;
    carrito.cantidad=cantidad;
    carrito.comfav=comfav;
    carrito.falta=falta;
    carrito.halta=halta;
    carrito.fvto=fvto;
    await carrito.save();

    res.json(carrito);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteCarrito(req, res) {
  const { id } = req.params;
  try {
    
    await Carrito.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}


