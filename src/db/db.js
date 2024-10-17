const db = [
    {
        id:1,
        nome: "indalecio",
        sobrenome: "olivo",
        email:"indalecioolivo@gmail.com",
        senha: "dev123",
    },
    {
        id:2,
        nome: "guilherme",
        sobrenome: "lins",
        email:"guilhermelins@gmail.com",
        senha: "dev123",
    },
    {
        id:3,
        nome: "guilherme",
        sobrenome: "correia",
        email:"guilhermecorreia@gmail.com",
        senha: "dev123",
    },
    {
        id:4,
        nome: "henrique",
        sobrenome: "azevedo",
        email:"henriqueazevedo@gmail.com",
        senha: "dev123",
    },
]

const publications = [
    {
        id: 1,
        idUser: 1,
        img: "negoço",
        nome: "A Pedra Filosofal",
        description: "Site mostrando o filme do heri poti.",
        tags: ["livros", "css", "html", "avada", "kedavra"],        
    },
    {
        id: 2,
        idUser: 1,
        img: "trem",
        nome: "Silmarilion",
        description: "Site mostrando as Silmaris",
        tags: ["tolkien", "css", "html", "mithril"],        
    },
    {
        id: 3,
        idUser: 1,
        img: "bagui",
        nome: "Galadriel Glory",
        description: "Site fasite Galadriel maravilhosa.",
        tags: ["tolkien", "css", "html", "mithril", "elfo"],        
    },
    {
        id: 4,
        idUser: 2,
        img: "queijo",
        nome: "Queijo Minas o Melhor",
        description: "Aplicação feita para contemplar a glória do queijo minas frescal.",
        tags: ["minas", "js", "react", "uai", "trem"],        
    },
];

module.exports = {db, publications};