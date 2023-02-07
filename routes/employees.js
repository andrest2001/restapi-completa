const express = require('express');
const router = express.Router();
const {getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee} = require('../controllers/employees.controllers')


router.get('/employees', getEmployees);

router.get('/employees/:id', getEmployee);
  
router.post('/employees', createEmployee);
  
router.put('/employees/:id', updateEmployee);
  
router.delete('/employees/:id', deleteEmployee);

module.exports = router;