// Find the three things on the page that we need.
const service = document.querySelector('#service');
const repairs = document.querySelector('#repairs');
const total = document.querySelector('#total');

// Work out the price and show it on the page.
function updateTotal() {
 // Turn the typed text into a whole number. Empty or wrong input becomes 0.
 let count = Math.floor(Number(repairs.value) || 0);
 if (count < 0) {
 count = 0;
 }
 // Price of the service plus EUR 5 for each small repair.
 const price = Number(service.value) + count * 5;
 total.textContent = 'EUR ' + price;
}

// Update the total when the visitor changes something.
service.addEventListener('change', updateTotal);
repairs.addEventListener('input', updateTotal);

// Also show the correct total as soon as the page opens.
updateTotal();

// The booking form: it cannot really book yet, so we say so.
const form = document.querySelector('#booking');
const message = document.querySelector('#message');

form.addEventListener('submit', function (event) {
 event.preventDefault();
 message.hidden = false;
});
