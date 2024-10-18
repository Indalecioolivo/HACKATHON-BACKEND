const {publications} = require("../db/db");

const getAllPublications = (req, res) => {
    res.send(publications);
}

const getUserPublications = (req, res) => {
    const {id_user} = req.params;
    const userPublications = 
        publications.filter((publication) => {
            return publication.id_user == idser;
        });
    if(userPublications.length == 0){
        return res.json({
            message: "O usuário não contém publicações.",
            existPublications: false,
        })
    }
    return res.json(userPublications);
}

const postNewPublication = (req, res) => {
    const { id_user, img, nome, description, tags } = req.body;
    if(!id_user){
        return res.status(400).json({message:"O id_user é obrigatório."})
    };
    if(!img){
        return res.status(400).json({message: "A imagem é obrigatória."})
    }
    if(!nome){
        return res.status(400).json({message: "O nome é obrigatório."})
    }
    if(!description){
        return res.status(400).json({message: "A descrição é obrigatória."})
    }
    if(tags.length == 0){
        return res.status(400).json({message: "É obrigatório ao menos 1 tag."})
    }
    
    const newPublication = {...req.body}
    

    return res.status(201).json({message: "Publicação criada com sucesso."});
}

const patchPublication = (req,res) => {
    const { id_publi, id_user, img, nome, description, tags } = req.body;
    if(!id_publi){
        return res.status(400).json({message: "O id_publi é obrigatório."})
    }
    if(!id_user){
        return res.status(400).json({message:"O id_user é obrigatório."})
    };
    if(!img){
        return res.status(400).json({message: "A imagem é obrigatória."})
    }
    if(!nome){
        return res.status(400).json({message: "O nome é obrigatório."})
    }
    if(!description){
        return res.status(400).json({message: "A descrição é obrigatória."})
    }
    if(tags.length == 0){
        return res.status(400).json({message: "É obrigatório ao menos 1 tag."})
    }

    const editedPublication = {...req.body};
    console.log(editedPublication);
    

    return res.status(200).json({message: "Publicação editada com sucesso."})
}

module.exports = {getAllPublications, getUserPublications, postNewPublication, patchPublication};