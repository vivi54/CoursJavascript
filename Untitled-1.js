// DECLARER DES VARIABLES

let nombreDeChats = 2 ;
let nombreDeChiens = 4 ;

// lOOGER DANS LA CONSOLE ( AFFICHER LE RESEULTAT DES DEUX VARIABLES )

console.log(nombreDeChats) ;
console.log(nombreDeChiens) ;

// MODIFIER LA VALEUR DUNE VARIABLE

nombreDeChats = 4 ;
// La valeur de la variable nombreDeChats a pris la valeur 4 au lieu de 2 

// AJOUTER DEUX VARIABLE (+)

let totalCDs = 60 ;
let totalVinyles = 30 ;

let totalMusic = totalCDs + totalVinyles,yls ; // Nouvelle variable totalMusic et addition ( totalMusic = 90 )
console.log(totalMusic);

// SOUSTRACTION DE DEUX VARIABLE

let cookieSachet = 10 ;
let cookieRetirer = 2 ;

let cookieRestantSachet = cookieSachet - cookieRetirer ; // Nouvelle variable cookieRetirerDuSachet et soustraction (cookieRestantDuSachet = 12 )
console.log(cookieRestantSachet);

// POUR AJOUTER OU SOUSTRIRE ON PEU UTILISER LES OPERATEURS += OU -=

let chipsSachet = 10 ; 
chipsSachet -= 3 ; // Manger deux chips ( resultat 7 )
console.log(chipsSachet);

chipsSachet += 7 ; // Rajout de 7 chips dans le sachet ( resultat 7 + 7 = 14 chips dans le sachet)
console.log(chipsSachet);

// AJOUTER SOUSTRAIRE 1 AVEC ++ ET --

let nombreDeLike = 10 ;
nombreDeLike ++ ; // Rajout de 1 like ( resultat 11 )
console.log(nombreDeLike);

nombreDeLike -- ; // Retrait de 1 like ( resultat 10)
console.log(nombreDeLike);

// MULTIPLICATION DIVISION

let cdProduct = 20 ;
let stockCdProduct = 5 ;

let totalProduct = cdProduct * stockCdProduct; // Nouvelle variable totalProduct ( resultat 20*5 = 100 )
console.log(totalProduct);


// DIVISER ET MULTIPLIER UN NOMBRE AVEC OPERATEUR *= ET /= 

let nombreDeLion = 2 ;
nombreDeLion *=6 ; // Resultat (2*6 12 nombreDeLion prend la valeur 12)
console.log(nombreDeLion); 

nombreDeLion /= 3 ; // Resultat ( 12 / 3 = 4 nombreDeLion prend la valeur 4) 
console.log(nombreDeLion);

// CONSTANTE ( variable qui ne peut pas etre réaffecter )

const heurParJour = 24 ; // cette variable ne peut plus etre changer ele es constante
console.log(heurParJour)

// ENREGISTER DES DONNEES AVEC DES TYPES DE DONNEES 
// number ( nombre) , string (chaine de caractere) , boolean (valeur logique)

let positive = 42 ; // les variables number peuvent etre positive , negative ou des nombre entiers ou decimaux
let negative = -42 ; // negative
let decimal = 42.424242 ; // decimaux
console.log(typeof positive); // Le type de positive est NUMBER ( typeof)

let userEstClient = true ;
let userEstAdmin = false ;
console.log(typeof userEstClient); // Reponse Boolean

// LES CHAINES DE CARACTERES

let prenom = 'Will' ;
let nom = 'Alexander' ;
console.log(prenom + '' + nom); // reponse WillAlexander , ( ' ' ) sert a definir une chaine de caractere STRING

// les chaines peuvent etre concaténées ( ajoutées a la fin l'une de l'autre avec l'operateur + )
let nomComplet = prenom + ' ' + nom ;
console.log(nomComplet); // Reponse Will Alexander


// DEFINISSEZ DES OBJETS ET LEURS ATTRIBUTS AVEC DES CLASSES 

let monLivre = {
    titre : 'SNK' ,
    author : ' Will ' ,
    nombreDePages : 250 ,
    disponibilite : true 
};
console.log(monLivre); // reponse title : snk , author : will ect... 

// ACCEDER AU DONNEES DUN OBJET ( par la notation pointee DOT .)

let titreDuLivre = monLivre.titre ; // nouvelle variable titreDuLivre = Nom de la variable (point . ) + le nom de la valeur souhaité 
let nombrePages = monLivre.nombreDePages ; // variable . valeur ( resultat 250 ) pages
console.log(nombrePages); // affiche dans la console la valeur de la variable nombrePages ( 250)

// CREE DES CLASSES (class) les class sont un modele pour un objet et peuvent construire plusieurs objet du meme type

class livre {
    constructor(titre,auteur,pages) { // le constructor d'une classe est la fontion qui es appelée quand on crée une nouvelle instance de cette classe avec le mot cle NEW
    this.titre = titre ; // pour ATTRIBUER le titre , l'auteur , pages on utilise le mot cle THIS et la notation DOT .
    this.auteur = auteur ; // le mot clé THIS fait reference a la nouvelle instance , il utilise la notation DOT pour attribuer les valeurs recu au clé correspondante
    this.pages = pages ;
    }
} 
// Maintenant que la classe est terminée , on peu cree des instances par le mot clé NEW
let myLivre = new livre ('naruto' , 'masashi kishimoto' , 250 ) ;
let myLivre2 = new livre ('dragonBall' , 'akima' , 250 ) ;
let myLivre3 = new livre ('one piece' , 'jenesaispas' , 250 ) ;
console.log(myLivre); // le navigateur va afficher l'objet cree avec la class : titre : .. auteur: .. ect
console.log(myLivre2); // Il es possible de faire plusieur objet avec les class
console.log(myLivre3);



