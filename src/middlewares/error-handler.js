export default (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Error interno del servidor' });


const statusCode = err.status || 500;

const mensage = statusCode === 500 ? 'Error interno del servidor' : err.message;

res.status(statusCode).json({ error: mensage });
};

