import { Router } from 'express';
import { 
    validarCamposAuto, 
    validarIdNumerico 
} from '../middlewares/validar.middleware.js';
import { verificarToken } from '../middlewares/auth.middleware.js';
import { 
    listarDisponibles, 
    crearAuto, 
    listarAutos, 
    obtenerAuto, 
    actualizarAuto, 
    eliminarAuto 
} from '../controllers/autoController.js';

const router = Router();

router.get('/disponibles', listarDisponibles);
router.post('/', verificarToken, validarCamposAuto, crearAuto);
router.get('/', listarAutos);
router.get('/:id', validarIdNumerico, obtenerAuto);
router.put('/:id', verificarToken, validarIdNumerico, actualizarAuto);
router.delete('/:id', verificarToken, validarIdNumerico, eliminarAuto);

export default router;