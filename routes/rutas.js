import {getProducts, addProducts,updateProducts, deleteProducts, actualizarFormulario, eliminarFormulario, nuevoFormulario} from "../conrollers/product-controller.js";
import {Router} from "express";

const router=Router();
router.get("/", getProducts);
router.post("/addProduct", addProducts);
router.get("/nuevo", nuevoFormulario)
router.post("/updateProduct", updateProducts);
router.get("/actualizar", actualizarFormulario);
outer.post("/deleteProduct", deleteProducts);
router.get("/eliminar", eliminarFormulario);

export default router;