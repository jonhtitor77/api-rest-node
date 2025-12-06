import 'dotenv/config';

import express from 'express';
const app = express();

app.use(express.json());

// const products = [
//   {
//     id: 1,
//     name: "camiseta deportiva",
//     price: 150,
//     categories: ["ropa", "deportes"],
//   },
//   {
//     id: 2,
//     name: "Zapatos Running",
//     price: 1200,
//     categories: ["calzado", "deportes"],
//   },
//   {
//     id: 3,
//     name: "Mochila Escolar",
//     price: 350,
//     categories: ["mochilas", "escolar"],
//   },
//   {
//     id: 4,
//     name: "Auriculares Bluetooth",
//     price: 800,
//     categories: ["tecnologia", "audio"],
//   },
//   {
//     id: 5,
//     name: "Botella termica",
//     price: 220,
//     categories: ["hogar", "accesorios"],
//   }

// ];
  
// app.use((req, res, next) => {
//     // res.json({ message: 'API en mantenimiento' });
//     console.log(req.method);
//     next();
// });

app.get('/', (req, res) => {
  res.json({ message: "Bienvenido a nuestra API REST!" });
});

import productsRouter from './src/routes/products.router.js';
app.use(productsRouter);


// app.get("/products" , (req, res) => {
//   const { category } = req.query;

//   if (category) {
//     const produsctosFiltrados = products.filter((item) =>
//       item.categories.includes(category)
//     );
//     res.json(produsctosFiltrados);
//       }else{


//     res.json(products);
//       }
// });

// app.get("/products/search", (req, res) => {
//   const { name } = req.query;

//   if (!name) {
//    return res.status(404).json({ error: 'El nombre se requiere'});
//   }

//   const productosFiltrados = products.filter((item) => item.name.toLowerCase().includes(name.toLowerCase())
// );

// if(productosFiltrados.length == 0) {
//   return res.status(404).json({ error: 'No se encontraron productos'});
// }

// res.json(productosFiltrados);
// });

// app.get("/products/:id", (req, res) => {
//   const id = parseInt(req.params.id);

// const product = products.find((item) => item.id === id);

//   if (!product) {
//     res.status(404).json({ error: "No existe el producto" });
//   }
//   res.json(product);
// });




import noEncontrada from './src/middlewares/not-found.js';
app.use(noEncontrada);
// app.use((req, res,next) => {
//     res.status(404).json({ error: "No Encontrada" });
// });

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));