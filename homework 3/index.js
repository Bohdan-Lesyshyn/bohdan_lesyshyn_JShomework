const credits = 23580;
const pricePerDroid = 3000;
let numberOfDroids = prompt("Введіть кількість дроідів");
let totalPrice = pricePerDroid * numberOfDroids;
if(numberOfDroids === null){
    let message = "Скасовано";
    console.log(message);
}else if(totalPrice > credits){
    console.log("Недостатньо коштів на рахунку");
}else if(totalPrice < credits){
    console.log(`Ви купили ${numberOfDroids} , залишок на рахунку ${credits - totalPrice}`);
}

