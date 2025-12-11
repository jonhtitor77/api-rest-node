import * as Model from "../models/Product.js";

export const getProducts = async (category) => {
  
  if (category) {
    const productsByCategory = await Model.getProductsByCategory(category);
    return  productsByCategory;
    
    }else{
        const products = await Model.getAllProducts();

    return products;
  }
};
      

export const searchProductsByName = async (name) => {
 
    const products = await Model.getAllProducts();

  const productosFiltrados = products.filter((item) => item.name.toLowerCase().includes(name.toLowerCase())
);

    return productosFiltrados;
};



export const getProductDetails = async (id) => {
  const product = await Model.getProductById(id);

    return product;
};


export const createNewProduct = async (productData) => {
 
  
 const product = await Model.createProduct(productData);
 return product;
};



export const updateProductDetails = async (id,productData) => {
  const updated = await Model.updateProduct(id, productData );
  return updated;
};
 

export const updatePartialProductDetails = async (id, patchData) => {
  
  const data = {}
  if (patchData.name) data.name = patchData.name;
  if (patchData.price) data.price = patchData.price;
  if (patchData.categories) data.categories = patchData.categories;

  if (Object.keys(data).length === 0) {
    // 
    return null; // No hay datos para actualizar
  }
const updated = await Model.updatePatchProduct(id, data);
  return updated;
};




export const removeProduct = async (id) => {

  const deleted = await Model.deleteProduct(id);

return deleted;
};