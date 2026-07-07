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

export const updateProducts = async (req, res) => {
    console.log("Actualizar producto...");
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

export const deleteProducts = async (req, res) => {
    console.log("Eliminar producto...");
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



export const nuevoFormulario = async (req, res) => {
    res.render("nuevo", { title: "hey", message: "hello there!" });
};

export const actualizarFormulario=async (req, res)=>{
    res.render("nuevo", {title: "hey", message: "hello there"})
};

export const eliminarFormulario=async (req, res)=>{
    res.render("nuevo", {title: "hey", message: "hello there"})
};
