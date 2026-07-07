import {supabase} from "../config.js";

export const getProducts = async (req, res) => {
    console.log("Listando productos...");
    const data = await supabase.from("productos").select("*");
    console.log(data);
    // res.json(data);
    res.render("productos", { title: "Hey", message: "hello there!", productos:data });
};


export const addProducts = async (req, res) => {
    console.log("Añadir producto...");
    const { nombre, unidades, precio } = req.body;
    if (!nombre || !unidades || !precio) {
        return res.send("Faltan campos obligatorios");
    }
    const insertar = await supabase.from("productos").insert({
    "nombre": nombre,
    "unidades": Number(unidades),
    "precio": Number(precio)    
    });
    
    res.redirect("/");
};

export const newFormulario = async (req, res) => {
    res.render("new", { title: "hey", message: "hello there!" });
};