console.log("\nWelcome to the  pasta recipe\n");
let spaghetti=400;
let guanciale=250;
let eggYolk=6;
let romanoCheese=50;
let blackPepper=4;
let water=2500;

console.log("Here are the ingredients : \n");
console.log("Spaghetti:", spaghetti,"g");
console.log("Guanciale:", guanciale,"g");
console.log("Very fresh egg yolks:", eggYolk);
console.log("Aged grated Pecorino Romano cheese:", romanoCheese,"g");
console.log("Raw black pepper:", blackPepper,"g\n" );


let mediumBowl = eggYolk+romanoCheese;
mediumBowl+= .25*blackPepper;
console.log("Mix of Egg, cheese and small portion of Pepper :", mediumBowl);

let cookedPasta= spaghetti+10/100*water;
console.log("Cooked pasta :" ,cookedPasta);

let pan=1/100*water + guanciale;
console.log("Adding 2 spoons of water to guanciale ",pan);
pan += cookedPasta;
console.log("Adding guanciale and Pasta: ",pan);
pan+=mediumBowl;
console.log("Adding egg and cheese mixture to the pan:" ,pan);
let  carbonara=pan+.75*blackPepper;
console.log("Adding pepper to the pan:",carbonara);
console.log("Carbonara :" ,carbonara);