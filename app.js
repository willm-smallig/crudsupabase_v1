import express from "express";
import { supabase } from "./config.js";
import routes from "./routes/rutas.js";


console.log("Starting the application...");
//console.log(supabase);
const app = express();
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", routes);


app.listen(3000, () => {
console.log(`Servidor ejecutándose en puerto 3000`);
});