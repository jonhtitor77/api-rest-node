import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('bienvenido a mi API REST con Node.js y Express!');
});

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));