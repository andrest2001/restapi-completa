const pool=require('../db.js')

const getEmployees = (req, res, next) =>{
    res.send('Obteniendo empleados');
}
const createEmployees = async(req, res, next) =>{
    const{name, salary}= req.body
    const [rows]=await pool.query('INSERT INTO employee (name, salary) VALUES (?,?)', [name, salary])
    //console.log(name, salary)
    res.send({rows});
}

const updateEmployees = (req, res, next) =>{
    res.send('Actualizando empleados');
}

const deleteEmployees =(req, res, next) =>{
    res.send('Eliminando empleados');
}
module.exports = {
    getEmployees, createEmployees, updateEmployees, deleteEmployees
}