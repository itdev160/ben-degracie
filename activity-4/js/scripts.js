//welcome message
var user = 'Ben';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest MLB The Show 20 reviews.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//product price
var price = 60,
    studentDiscount = 0.10,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

    priceEl.textContent = price.toFixed(2);
    studentPriceEl.textContent = studentPrice.toFixed(2);
