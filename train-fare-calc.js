let age = prompt("What is your age?");
// let distance = prompt("How far are you travelling?");
let price = 0.21
let fare;
let juniorDiscount = 20;
let seniorDiscount = 40;

let distanceVictoria = 0;
let distanceKingsCross = 2;
let distanceEuston = 4;
let distanceFarringdon = 6;
let distanceLiverpoolSt = 8;

let distance;

let startStation = prompt("Where would you like to start your journey? (Kings Cross, Liverpool St, Victoria, Farringdon, Euston)");
let endStation = prompt("Where would you like to end your journey? (Kings Cross, Liverpool St, Victoria, Farringdon, Euston)");



if ((startStation === "Kings Cross" || endStation === "Kings Cross") && (startStation === "Victoria" || endStation === "Victoria")) {
    distance = Math.abs(distanceVictoria - distanceKingsCross);
    console.log(distance);
}
if ((startStation === "Victoria" || endStation === "Victoria") && (startStation === "Farringdon" || endStation === "Farringdon")) {
    distance = Math.abs(distanceFarringdon - distanceVictoria);
}
if ((startStation === "Victoria" || endStation === "Victoria") && (startStation === "Euston" || endStation === "Euston")){
    distance = Math.abs(distanceLiverpoolSt - distanceVictoria);
}
if ((startStation === "Victoria" || endStation === "Victoria") && (startStation === "Liverpool St" || endStation === "Liverpool St")){
    distance = Math.abs(distanceEuston - distanceVictoria);
}

if (age < 18) {
    fare = (distance * price) * (1 - (juniorDiscount/100));
    alert(`Your train fare is £${fare}`);
} else if (age > 65) {
    fare = (distance * price) * (1 - (seniorDiscount/100));
    alert(`Your train fare is £${fare}`);
} else {
    (fare = distance * price);
    alert(`Your train fare is £${fare}`);
}


