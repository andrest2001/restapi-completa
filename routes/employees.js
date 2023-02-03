const express = require('express');
const router = express.Router();
const {getEmployees, createEmployees} = require('../controllers/employees.controllers')


router.get('/employees', getEmployees);
  
router.post('/employees', createEmployees);
  
router.put('/employees', (req, res, next) =>{
    res.send('Actualizando empleados');
});
  
router.delete('/employees', (req, res, next) =>{
    res.send('Eliminando empleados');
});

module.exports = router;