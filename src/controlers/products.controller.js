import e from "express";
import * as Model from "../models/Product.js";

export const getAllProducts = async (req, res) => {
  const { category } = req.query;

  const products = await Model.getAllProducts();

  if (category) {
    const produsctosFiltrados = products.filter((item) =>
      item.categories.includes(category)
    );
    res.json(produsctosFiltrados);
      }else{


    res.json(products);
      }
};

export const searchProducts = (req, res) => {
  const { name } = req.query;

  if (!name) {
   return res.status(404).json({ error: 'El nombre se requiere'});
  }

    const products = Model.getAllProducts();

  const productosFiltrados = products.filter((item) => item.name.toLowerCase().includes(name.toLowerCase())
);

if(productosFiltrados.length == 0) {
  return res.status(404).json({ error: 'No se encontraron productos'});
}

res.json(productosFiltrados);
};

export const getProductById = async (req, res) => {
  const id = req.params.id;

const product = await Model.getProductById(id);

  if (!product) {
    res.status(404).json({ error: "No existe el producto" });
  }
  res.json(product);
};

export const createProduct = async (req, res) => {
  const{name, price, categories} = req.body;
  
 const product = await Model.createProduct({name, price, categories});
 
 res.status(201).json(product);
};
