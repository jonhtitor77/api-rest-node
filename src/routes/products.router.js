import { Router } from 'express';

const router = Router();

 
import { getAllProducts, getProductById, searchProducts, createProduct, deleteProduct, updateProduct, updatePatchProduct } from '../controlers/products.controller.js';

router.get("/products" , getAllProducts);

router.get("/products/search", searchProducts);

router.get("/products/:id", getProductById);

router.post("/products", createProduct);

router.put("/products/:id", updateProduct);
router.patch("/products/:id", updatePatchProduct);

router.delete("/products/:id", deleteProduct);

export default router;