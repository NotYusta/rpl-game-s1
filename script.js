const ticketPrice = Math.floor(Math.random() * 11) * 5;
console.log(ticketPrice);

let cPrice = -1;
while (ticketPrice !== cPrice) {
	cPrice = parseInt(
		prompt(
			"Tebak harga tiket! \nHarga mulai dari 10 ribu sampai 150 ribu dengan kelipatan 5 ribu"
		)
	);

	if (isNaN(cPrice)) {
		alert("Harga tiket harus angka!");
	}

	if (cPrice > 1000) {
		cPrice = cPrice / 1000;
	}

	if (ticketPrice > cPrice) {
		alert(`Harga tiket lebih tinggi dari ${cPrice}`);
	}

	if (ticketPrice < cPrice) {
		alert(`Harga tiket lebih rendah dari ${cPrice}`);
	}
}

if (ticketPrice === cPrice) {
	alert("Selamat tebakan harga tiket kamu benar!");

	const playAgain = confirm("Main lagi?");
	if (playAgain) {
		location.reload();
	}
}
