const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController')
const auth = require('../middleware/auth');
const {check} = require ('express-validator');

//Crea tareas
//api/tareas
router.post('/',
    auth,
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('proyecto', 'El proyecto es obligatorio').not().isEmpty()

    ],
    tareaController.crearTarea
    );

//Obtener tarea
router.get('/',
    auth,
    tareaController.obtenerTareas
    );
//Actualiza tarea
router.put('/:id', 
    auth,
    tareaController.actualizarTarea
    );
//Elimina tarea
router.delete('/:id', 
    auth,
    tareaController.eliminaTarea
    );

module.exports = router;
