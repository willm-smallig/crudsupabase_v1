import {getProducts, addProducts, newFormulario} from "../conrollers/product-controller.js";
import {Router} from "express";

const router=Router();
router.get("/", getProducts);
router.get("/add", addProducts);
router.get("/new", newFormulario);
router.post("/addProduct", addProducts);

export default router;