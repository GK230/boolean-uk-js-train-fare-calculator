let age = prompt("What is your age?");
let distance = prompt("How far are you travelling?");
let price = 0.21
let fare;
let youngPersonsDiscount = 20;
let olderPersonsDiscount = 40;
if (age < 18) {
    fare = (distance * price) * (1 - (youngPersonsDiscount/100));
    alert(`Your train fare is ${fare}p`);
} else if (age > 65) {
    fare = (distance * price) * (1 - (olderPersonsDiscount/100));
    alert(`Your train fare is ${fare}p`);
} else {
    (fare = distance * price);
    alert(`Your train fare is ${fare}p`);

}