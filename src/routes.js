const express = require("express");

const routes = express();
const { getUsers, getUserByEmail, postNewUser } = require("./controllers/users");
const {getAllPublications,getUserPublications, postNewPublication, patchPublication} = require("./controllers/publications")

routes.use(express.json());
routes.get("/users", getUsers);
routes.get("/users/:email", getUserByEmail);
routes.post("/newUser", postNewUser);

routes.get("/publications", getAllPublications);
routes.get("/publications/:idUser", getUserPublications);
routes.post("/publications/newPublication", postNewPublication);
routes.patch("/publications/editPublication", patchPublication);


routes.listen(3000);


module.exports = {routes};