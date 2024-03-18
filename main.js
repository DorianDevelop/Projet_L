const movieCards = document.querySelectorAll(".movie-card");
const modalOverlay = document.querySelector(".modal-overlay");
const modalClose = document.querySelector(".close");

const projecteur = document.querySelector(".projecteur");
const rideaux = document.querySelector(".rideaux");

movieCards.forEach((card) => {
	card.addEventListener("click", () => {
		modalOverlay.style.display = "flex";
	});

	card.addEventListener("mouseenter", function (event) {
		const rect = event.target.getBoundingClientRect();
		const middleX = rect.left + rect.width / 2;
		projecteur.style.left = middleX - 200 + "px";
		projecteur.style.opacity = "0.1";
		rideaux.style.opacity = "1";
	});
	card.addEventListener("mouseleave", function (event) {
		projecteur.style.opacity = "0";
		rideaux.style.opacity = "0";
	});
});

modalOverlay.addEventListener("click", (event) => {
	if (event.target === modalOverlay || event.target === modalClose) {
		modalOverlay.style.display = "none";
		// Clear movie details from the modal
	}
});
