import 'dotenv/config';

import express from 'express';
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "Bienvenido a nuestra API REST!" });
});

import authRouter from './src/routes/auth.routes.js';
app.use("/api/auth", authRouter);

import productsRouter from './src/routes/products.routes.js';
app.use(productsRouter);


import noEncontrada from './src/middlewares/not-found.js';
app.use(noEncontrada);


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));