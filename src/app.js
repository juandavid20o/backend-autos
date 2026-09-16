import express from 'express';
import cors from 'cors';
import clienteRoutes from './routes/clienteRoutes.js';
import autoRoutes from './routes/autoRoutes.js';
import alquilerRoutes from './routes/alquilerRoutes.js';
import { manejadorErrores } from './middlewares/error.middleware.js';

const app = express();

// Configurar CORS y manejo de JSON al inicio
app.use(cors());
app.use(express.json());

// Ruta raíz de comprobación
app.get('/', (req, res) => {
    res.status(200).json({
        mensaje: 'API de Alquiler de Autos funcionando correctamente'
    });
});

// Rutas de la API
app.use('/api/clientes', clienteRoutes);
app.use('/api/autos', autoRoutes);
app.use('/api/alquiler', alquilerRoutes);

// Middleware 404 (Ruta no encontrada)
app.use((req, res) => {
    res.status(404).json({ mensaje: 'Ruta no encontrada' });
});

// Middleware global de manejo de errores (siempre al final)
app.use(manejadorErrores);

export default app;