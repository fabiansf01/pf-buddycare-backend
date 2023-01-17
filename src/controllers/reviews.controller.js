import { Reviews } from "../models/Reviews.js";
/*import { Task } from "../models/Task.js";*/


/* Routes
router.post("/", createReviews);
router.get("/", getReviews);
router.put("/:id", updateReviews);
router.delete("/:id", deleteReview);
router.get("/:id", getReview);*/



export async function getReviews(req, res) {
  console.log("inicio reviews");
  try {
    const xReviews = await Reviews.findAll({
      atributes: ["id","id_cliente","destino","titulo","nota","calificacion","estado","falta","halta" ],
    });
    res.json(xReviews);
  } catch (error) {
    console.log("error detectado")
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createReviews(req, res) {
  const { id,	id_cliente,	destino,titulo,	nota,calificacion,estado,falta ,halta  } = req.body;
 
 
  try {
    let newReviews = await Reviews.create(
      {
        id,
        id_cliente,
        destino,
        titulo,
        nota,
        calificacion,
        estado,
        falta,
        halta 
        
      },
      
    );
    return res.json(newReviews);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}





export async function getReview(req, res) {
  const { id } = req.params;
  try {
    const Review = await Reviews.findOne({
      where: {
        id,
      },
    });
    res.json(Review);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateReviews = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_cliente,	destino,titulo,	nota,calificacion,estado,falta ,halta  } = req.body;

    const review = await Reviews.findByPk(id);
    review.id_cliente=id_cliente;
    review.destino=destino;
    review.titulo=titulo;
    review.nota=nota;
    review.calificacion=calificacion;
    review.estado=estado;
    review.falta=falta;
    review.halta=halta;     
    await review.save();

    res.json(review);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteReview(req, res) {
  const { id } = req.params;
  try {
    
    await Reviews.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

