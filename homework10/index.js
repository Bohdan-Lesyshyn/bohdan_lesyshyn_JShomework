const City = function (name, quantity, Mainland) {
    this.name = name;
    this.quantity = quantity;
    this.Mainland = Mainland;
}

const lviv = new City("Lviv", "one million", "Eurasia");

const London = new City("London", "nine million", "");

const Odessa = new City("Odessa", "One million", "Eurasia");

console.log(lviv);

console.log(London);

console.log(Odessa);

