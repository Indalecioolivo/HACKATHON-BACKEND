const {db} = require("../db/db")

const getUsers = (req, res) =>{    
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

    const newUser = {name, last_name, email, senha};
    db.push(newUser);

    return res.status(201).json({message: "Usuário cadastrado com sucesso."});
}





module.exports = {getUsers, getUserByEmail, postNewUser}