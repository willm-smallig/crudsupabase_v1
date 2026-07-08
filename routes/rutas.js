import {getProducts, addProducts,updateProducts, deleteProducts, actualizarFormulario, eliminarFormulario, nuevoFormulario} from "../conrollers/product-controller.js";
import {Router} from "express";

const router=Router();
router.get("/", getProducts);
//ruta para añadir producto
router.post("/addProduct", addProducts);
router.get("/nuevo", nuevoFormulario)
//ruta para actualizar producto
router.post("/updateProduct", updateProducts);
router.get("/actualizar", actualizarFormulario);
//ruta para eliminar producto
router.post("/deleteProduct", deleteProducts);
router.get("/eliminar", eliminarFormulario);


export default router;