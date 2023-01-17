import express from "express";
import morgan from "morgan";
import cors from 'cors';
//const bodyParser = require("body-parser");


const app = express();

// Import routes
import projectRoutes from "./routes/projects.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import rubrosRoutes from "./routes/rubros.routes.js";
import mascotasRoutes from "./routes/mascotas.routes.js";
import historiaclinicaRoutes from "./routes/historiaclinica.routes.js";
import veterinariasRoutes from "./routes/veterinarias.routes.js";
import veterinariosRoutes from "./routes/veterinarios.routes.js";
import operadoresRoutes from "./routes/operadores.routes.js";
import articulosRoutes from "./routes/articulos.routes.js";
import clientesRoutes from "./routes/clientes.routes.js";
import carritoRoutes from "./routes/carrito.routes.js";
import horariosRoutes from "./routes/horarios.routes.js";
import commerceRoutes from "./routes/commerce.routes.js";
import reviewsRoutes from "./routes/reviews.routes.js";

import queryRoutes from "./routes/query.routes.js";

// Middlewares
app.use(cors());
//server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/rubros", rubrosRoutes);
app.use("/api/mascotas", mascotasRoutes);
app.use("/api/historiaclinica", historiaclinicaRoutes);
app.use("/api/veterinarias", veterinariasRoutes);
app.use("/api/veterinarios", veterinariosRoutes);
app.use("/api/operadores", operadoresRoutes);
app.use("/api/articulos", articulosRoutes);
app.use("/api/clientes", clientesRoutes);
app.use("/api/carrito", carritoRoutes);
app.use("/api/horarios", horariosRoutes);
app.use("/api/commerce", commerceRoutes);
app.use("/api/reviews", reviewsRoutes);




app.use("/api/query", queryRoutes);




export default app;
