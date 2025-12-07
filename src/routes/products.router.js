import { Router } from 'express';

const router = Router();

 
import { getAllProducts, getProductById, searchProducts, createProduct, deleteProduct, updateProduct, updatePatchProduct } from '../controlers/products.controller.js';
import { verifyToken } from '../middlewares/verify-token.js';

router.get("/products" , getAllProducts);

router.get("/products/search", searchProducts);

router.get("/products/:id", getProductById);

router.post("/products", verifyToken, createProduct);

router.put("/products/:id", verifyToken,updateProduct);
router.patch("/products/:id", verifyToken, updatePatchProduct);

router.delete("/products/:id", verifyToken, deleteProduct);

export default router;