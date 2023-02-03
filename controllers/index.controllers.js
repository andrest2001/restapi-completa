const pool=require('../db.js')

const ping = async (req, res, next) =>{
    const [result]= await pool.query('SELECT 1+1 AS result')
    res.json(result[0]);
}

const index=(req, res, next) =>{
    res.send('Hola mundo');
}

module.exports = {
    ping, index
}