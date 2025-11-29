import express from 'express';
const app = express();

app.use((req, res, next) => {
    // res.json({ message: 'API en mantenimiento' });
    console.log(req.method);
    next();
});

app.get('/', (req, res) => {
  res.json({ message: "Bienvenido a nuestra API REST!" });
});

import noEncontrada from './src/middlewares/not-found.js';
app.use(noEncontrada);
// app.use((req, res,next) => {
//     res.status(404).json({ error: "No Encontrada" });
// });

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));