const form = document.getElementById('water-form');
const table = document.getElementById('water-table');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	const amount = document.getElementById('amount').value;
	const time = document.getElementById('time').value;
	const row = table.insertRow();
	const amountCell = row.insertCell();
	const timeCell = row.insertCell();
	amountCell.textContent = amount;
	timeCell.textContent = time;
	form.reset();
});