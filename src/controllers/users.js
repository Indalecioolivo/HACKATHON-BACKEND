const {db} = require("../db/db")

const getUsers = (req, res) =>{    
    console.log("oi");
    return res.json(db);
};
const getUserByEmail = (req, res) => {
    const {email} = req.params;
    const userSearched = db.find((user) => {
        return user.email == email;
    });
    
    return res.json(userSearched);
};
const postNewUser = (req, res) => {
    const {nome, sobrenome, email, senha} = req.body;
    if(!nome){
        return res.status(400).json({message: "O nome é obrigatório."})
    };
    if(!sobrenome){
        return res.status(400).json({message: "O sobrenome é obrigatório."})
    };
    if(!email){
        return res.status(400).json({message: "O email é obrigatório."})
    }
    if(!senha){
        return res.send(400).json({message: "A senha é obrigatória."})
    }

    const newUser = {nome, sobrenome, email, senha};
    db.push(newUser);

    return res.status(201).json({message: "Usuário cadastrado com sucesso."});
}





module.exports = {getUsers, getUserByEmail, postNewUser}