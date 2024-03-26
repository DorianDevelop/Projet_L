const movieCards = document.querySelectorAll('.movie-card');
const modalOverlay = document.querySelector('.modal-overlay');
const modalClose = document.querySelector('.close');

const projecteur = document.querySelector('.projecteur');
const rideaux = document.querySelector('.rideaux');

const content = [
	{
		id: 0,
		label: 'Damsel',
		image: 'damsel.jpg',
		description: `Une jeune fille dévouée accepte d’épouser un prince séduisant. Mais elle découvre qu’elle a été choisie pour être sacrifiée et rembourser ainsi une dette ancienne. Enfermée dans une grotte, elle doit affronter un dragon cracheur de feu. Elle ne peut désormais plus compter que sur son intelligence et son courage pour espérer s’en sortir...`,
		genres: ['Fiction', 'Aventure', 'Marrant'],
		commentaires: [
			{
				id: 0,
				username: 'Louane',
				message: "J'aime vraiment bien ce film ! J'aime vraiment bien ce film ! J'aime vraiment bien ce film ! J'aime vraiment bien ce film ! J'aime vraiment bien ce film !",
				image: 'user.png',
				note: 4,
			},
			{ id: 1, username: 'Dorian', message: 'Ouais pas mal ouais', image: 'user.png', note: 3 },
			{ id: 2, username: 'Dorian 2', message: 'Ouais pas mal ouais', image: 'user.png', note: 4.5 },
			{ id: 3, username: 'Louane 2', message: "Ouais enfin bof, quoi c'est pas génial génial", image: 'user.png', note: 5 },
		],
	},
	{
		id: 1,
		label: 'Dune 2',
		image: 'dune2.jpg',
		description: `Dans DUNE : DEUXIÈME PARTIE, Paul Atreides s’unit à Chani et aux Fremen pour mener la révolte contre ceux qui ont anéanti sa famille. Hanté par de sombres prémonitions, il se trouve confronté au plus grand des dilemmes : choisir entre l’amour de sa vie et le destin de l’univers.`,
		genres: ['Fiction', 'Aventure'],
		commentaires: [
			{
				id: 0,
				username: 'Louane',
				message: "J'aime vraiment bien ce film !",
				image: 'user.png',
				note: 4,
			},
		],
	},
	{
		id: 2,
		label: 'Madame Web',
		image: 'madame_web.jpg',
		description: `Cassandra Web est une ambulancière de Manhattan qui serait capable de voir dans le futur. Forcée de faire face à des révélations sur son passé, elle noue une relation avec trois jeunes femmes destinées à un avenir hors du commun... si toutefois elles parviennent à survivre à un présent mortel.`,
		genres: ['Fiction', 'Aventure'],
		commentaires: [
			{
				id: 0,
				username: 'Louane',
				message: "J'aime vraiment bien ce film !",
				image: 'user.png',
				note: 4,
			},
		],
	},
	{
		id: 3,
		label: 'The Zone of Interest',
		image: 'zone.jpg',
		description: `Le commandant d’Auschwitz, Rudolf Höss, et sa femme Hedwig s’efforcent de construire une vie de rêve pour leur famille dans une maison avec jardin à côté du camp.`,
		genres: ['Fiction', 'Aventure'],
		commentaires: [
			{
				id: 0,
				username: 'Louane',
				message: "J'aime vraiment bien ce film !",
				image: 'user.png',
				note: 4,
			},
		],
	},
];

movieCards.forEach((card) => {
	card.addEventListener('mouseenter', function (event) {
		const rect = event.target.getBoundingClientRect();
		const middleX = rect.left + rect.width / 2;
		projecteur.style.left = middleX - 200 + 'px';
		projecteur.style.opacity = '0.1';
		rideaux.style.opacity = '1';
	});
	card.addEventListener('mouseleave', function (event) {
		projecteur.style.opacity = '0';
		rideaux.style.opacity = '0';
	});
});

modalOverlay.addEventListener('click', (event) => {
	if (event.target === modalOverlay || event.target === modalClose) {
		modalOverlay.style.display = 'none';
		// Create the html here
	}
});

function loadModal(id) {
	modalOverlay.style.display = 'flex';

	const modal = document.querySelector('.modal');
	const filmContainer = document.querySelector('.film-container');
	if (filmContainer) filmContainer.remove();

	const selectedContent = content.find((item) => item.id === id);

	avgNote = 0;
	nbr = 0;
	selectedContent.commentaires.forEach((c) => {
		avgNote += c.note;
		nbr++;
	});
	avgNote = Math.round((avgNote / nbr) * 10) / 10;

	const filmHTML = `
			<div class="affiche-header">
				<img src="${selectedContent.image}" alt="Affiche du film" />
				<div class="header">
					<h2>${selectedContent.label}</h2>
					<p class="synopsis">
						${selectedContent.description}
					</p>
					<p class="genres">
						${selectedContent.genres.join(', ')}
					</p>
				</div>
			</div>
			<p class="notes">Note moyenne : ${avgNote}</p>
			<section class="commentaires">
				<h3>Critiques</h3>
				${selectedContent.commentaires
					.map(
						(commentaire) => `
						<div class="commentaire">
							<div class="top_part">
							<img src="${commentaire.image}" alt="User Image" class="user-image" />
							
							<p class="username">${commentaire.username}</p>
							<p class="note">${commentaire.note}/5</p>
							</div>
							<div class="comment-content">
								<p class="message">${commentaire.message}</p>
							</div>
						</div>
					`
					)
					.join('')}
			</section>
	`;

	filmContainer.innerHTML = filmHTML;

	modal.appendChild(filmContainer);
}
