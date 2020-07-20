const name = "Nordcon";
const age = 35;

console.log(name);
console.log(age);
console.log(`Hej, nazywam się ${name} i mam ${age} lat.`);


const tekst = document.querySelector('.history__heading--js');
tekst.innerHTML = `Wiecie, że ${name} istnieje od ${age} lat?`;

const emptyParagraph = document.querySelector('.about__description--js');
emptyParagraph.innerHTML = `Czy JS działa poprawnie?`;
console.log(emptyParagraph);

function calculate(myNumber) {
    console.log(`Dostałam ${myNumber}`);
    return myNumber*7;
}

const myResult = calculate(3);

console.log(myResult);


function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
}

createContent('.about__heading--js', 'Czy to też działa?');


const car = {
    color: 'yellow',
    type:'audi',
    wheels: 4,
    seats: 5,
    owners: {
        nameOne: 'Jagoda', 
        nameThree: {},
        nameTwo: 'Robson',        
    }
}

const myProperty = 'name'

const showMeProperty = (myProperty) => {
    console.log(myProperty);
}

showMeProperty('aaaa');
console.log(myProperty);

const carTwo = {
    color: car.color,
    type:'audi',
    wheels: 4,
    seats: 5,
    owners: car.owners,
}

console.log(car.owners);
console.log(carTwo.owners);

car.owners.nameOne = 'NoOne';

console.log(car.owners);
console.log(carTwo.owners);



console.log(`colorCarOne to: ${car.color}`);
console.log(`colorCarTwo to: ${carTwo.color}`);

car.color = 'blue';

console.log(`colorCarOne to: ${car.color}`);
console.log(`colorCarTwo to: ${carTwo.color}`);