const {db} = require("../db/db")
const pool = require("../conection")

const getUsers = async (req, res) => {

    
    try {

        const result = await pool.query('select * from users');
        return res.json(result.rows);

    } catch (error) {
        console.log(error.message);
        
    }



};
const getUserByEmail = async (req, res) => {
    const {email} = req.params;
    try {
        const userSearched = await pool.query(`select * from users where email = '${email}'`)
        return res.json(userSearched.rows);
    } catch (error) {
        console.log(error.message);
        
    }

};
const postNewUser = async (req, res) => {
    const {name, last_name, email, senha} = req.body;
    if(!name){
        return res.status(400).json({message: "O name é obrigatório."})
    };
    if(!last_name){
        return res.status(400).json({message: "O last_name é obrigatório."})
    };
    if(!email){
        return res.status(400).json({message: "O email é obrigatório."})
    }
    if(!senha){
        return res.send(400).json({message: "A senha é obrigatória."})
    }

    try {
        const result = await pool.query(`
            insert into users
            (name, last_name, email, senha)
            values
            ('${name}', '${last_name}', '${email}', '${senha}')
            `)
        return res.json(result.rows)

    } catch (error) {
        return res.json(error.message);
        
    }
}





module.exports = {getUsers, getUserByEmail, postNewUser}