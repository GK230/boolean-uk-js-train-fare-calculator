let age = prompt("What is your age?");
let distance = prompt("How far are you travelling?");
let price = 0.21
let fare;
let juniorDiscount = 20;
let seniorDiscount = 40;


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