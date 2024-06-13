const prompt = require("prompt-sync")()

/*for (let i = 0; i < quiz.length; i++) {
    console.log(quiz[i].question);
    for (let j = 0; j < quiz[i].reponses.length; j++) {
        console.log(quiz[i].reponses[j]);
    }

}*/
let proposition = ""
let score = 0
let quiz = [
    {
        question: "Quel est le plus grand océan du monde ?",
        reponses: ["A: Océan Atlantique ", "B: Océan Indien", "C: Océan Arctique", "D: Océan Pacifique"],
        indice: "C'est l'océan qui borde les côtes de l'Asie à l'ouest et les Amériques à l'est.",
        bonne_reponse: "D"
    },
    {
        question: "Quelle est la capitale de l'Australie ?",
        reponses: ["A: Sydney", "B: Canberra", "C: Melbourne", "D: Brisbane"],
        indice: "Cette ville a été spécialement construite pour devenir la capitale du pays.",
        bonne_reponse: "B"
    },
    {
        question: "Qui a écrit Les Misérables ?",
        reponses: ["A: Gustave Flaubert", "B: Émile Zola", "C: Victor Hugo", "D: Honoré de Balzac"],
        indice: "Cet écrivain français est également l'auteur de Notre-Dame de Paris",
        bonne_reponse: "C"
    },
    {
        question: "Quelle est la formule chimique de l'eau ?",
        reponses: ["A: H2O", "B: CO2", "C: NaCl", "D: O2"],
        indice: "Cette formule est composée de deux éléments : hydrogène et oxygène.",
        bonne_reponse: "A"
    },
    {
        question: "Quelle planète est la plus proche du Soleil ?",
        reponses: ["A) Vénus", "B) Terre", "C) Mars", "D) Mercure"],
        indice: "Cette planète est nommée d'après le messager des dieux dans la mythologie romaine.",
        bonne_reponse: "D"
    },
    {
        question: "Quelle est la langue la plus parlée dans le monde ?",
        reponses: ["A) Espagnol", "B) Anglais", "C) Mandarin", "D) Hindi"],
        indice: "Cette langue est principalement parlée en Chine.",
        bonne_reponse: "C"
    },
    {
        question: "Qui a peint la 'Joconde' ?",
        reponses: ["A) Vincent van Gogh", "B) Pablo Picasso", "C) Léonard de Vinci", "D) Claude Monet"],
        indice: "Il était un célèbre artiste de la Renaissance italienne.",
        bonne_reponse: "C"
    },
    {
        question: "Quel est le plus petit pays du monde en termes de superficie ?",
        reponses: ["A) Monaco", "B) Nauru", "C) Vatican", "D) Malte"],
        indice: "Ce pays est enclavé dans une ville italienne.",
        bonne_reponse: "C"
    },
    {
        question: "Quelle planète est connue sous le nom de 'Planète Rouge' ?",
        reponses: ["A) Mars", "B) Jupiter", "C) Vénus", "D) Saturne"],
        indice: "Elle est nommée d'après le dieu romain de la guerre.",
        bonne_reponse: "A"

    },
    {
        question: "Quelle est la monnaie officielle du Japon ?",
        reponses: ["A) Yuan", "B) Won", "C) Yen", "D) Dollar"],
        indice: "Cette monnaie est symbolisée par '¥'.",
        bonne_reponse: "C"

    }
]



for (let i = 0; i < quiz.length; i++) {
    console.log(quiz[i].question);
    for (let j = 0; j < quiz[i].reponses.length; j++) {
        console.log(quiz[i].reponses[j]);
    }
    proposition = prompt("Quelle est votre reponse? ")
    while (proposition != "A" && proposition != "B" && proposition != "C" && proposition != "D") {
        proposition = prompt("Veuillez rentrer A , B , C ou D  ");
    }
    if (proposition != quiz[i].bonne_reponse) {
        console.log("Mauvaise réponse, voici un indice  !");
        proposition = prompt(quiz[i].indice)
        while (proposition != "A" && proposition != "B" && proposition != "C" && proposition != "D") {
            proposition = prompt("Veuillez rentrer A , B , C ou D  ");
        }
        if (proposition != quiz[i].bonne_reponse) {
            console.log("Dommage ce n'était pas la bonne réponse ! ")
        } else {
            score += 0.5
            console.log("Félicitation vous avez trouver la bonne réponse! ");
            console.log("Votre score est de " + score)

        }
    }
    else if (proposition = quiz[i].bonne_reponse) {
        score += 1
        console.log("Félicitation vous avez trouver la bonne réponse! ");
        console.log("Votre score est de " + score)
    }

}

console.log("Le quiz est terminé votre score est de " + score + "/10")


