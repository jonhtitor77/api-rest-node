import { Router } from 'express';

const router = Router();

 
import { getAllProducts, getProductById, searchProducts, createProduct, deleteProduct, updateProduct, updatePatchProduct } from '../controlers/products.controller.js';
import { verifyToken } from '../middlewares/verify-token.js';

router.get("/api/products" , getAllProducts);

router.get("/api/products/search", searchProducts);

router.get("/api/products/:id", getProductById);

router.post("/api/products/create", verifyToken, createProduct);

router.put("/api/products/:id", verifyToken,updateProduct);
router.patch("/api/products/:id", verifyToken, updatePatchProduct);

router.delete("/api/products/:id", verifyToken, deleteProduct);

export default router;