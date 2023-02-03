const getEmployees = (req, res, next) =>{
    res.send('Obteniendo empleados');
}
const createEmployees = (req, res, next) =>{
    res.send('Creando empleados');
}
module.exports = {
    getEmployees, createEmployees
}