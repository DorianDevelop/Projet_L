const movieCards = document.querySelectorAll(".movie-card");
const modalOverlay = document.querySelector(".modal-overlay");
const modalClose = document.querySelector(".close");

const projecteur = document.querySelector(".projecteur");
const rideaux = document.querySelector(".rideaux");

const content = [
	{
		id: 0,
		label: "Damsel",
		image: "damsel.jpg",
		description: `Une jeune fille dévouée accepte d’épouser un prince séduisant. Mais elle découvre qu’elle a été choisie pour être sacrifiée et rembourser ainsi une dette ancienne. Enfermée dans une grotte, elle doit affronter un dragon cracheur de feu. Elle ne peut désormais plus compter que sur son intelligence et son courage pour espérer s’en sortir...`,
		genres: ["Fiction", "Aventure", "Marrant"],
		commentaires: [
			{
				id: 0,
				username: "Louane Acca",
				message: `Cool`,
				image: "user.png",
			},
		],
	},
	{
		id: 1,
		label: "Dune 2",
		image: "dune2.jpg",
		description: `Dans DUNE : DEUXIÈME PARTIE, Paul Atreides s’unit à Chani et aux Fremen pour mener la révolte contre ceux qui ont anéanti sa famille. Hanté par de sombres prémonitions, il se trouve confronté au plus grand des dilemmes : choisir entre l’amour de sa vie et le destin de l’univers.`,
		genres: ["Fiction", "Aventure"],
		commentaires: [
			{
				id: 0,
				username: "Louane Acca",
				message: `Cool`,
				image: "user.png",
			},
		],
	},
	{
		id: 2,
		label: "Madame Web",
		image: "madame_web.jpg",
		description: `Cassandra Web est une ambulancière de Manhattan qui serait capable de voir dans le futur. Forcée de faire face à des révélations sur son passé, elle noue une relation avec trois jeunes femmes destinées à un avenir hors du commun... si toutefois elles parviennent à survivre à un présent mortel.`,
		genres: ["Fiction", "Aventure"],
		commentaires: [
			{
				id: 0,
				username: "Louane Acca",
				message: `Cool`,
				image: "user.png",
			},
		],
	},
	{
		id: 3,
		label: "The Zone of Interest",
		image: "zone.jpg",
		description: `Le commandant d’Auschwitz, Rudolf Höss, et sa femme Hedwig s’efforcent de construire une vie de rêve pour leur famille dans une maison avec jardin à côté du camp.`,
		genres: ["Fiction", "Aventure"],
		commentaires: [
			{
				id: 0,
				username: "Louane Acca",
				message: `Zone of Interest, réalisé par Jonathan Glazer, est un film qui plonge audacieusement dans les
							profondeurs sombres de l'âme humaine. Basé sur le roman éponyme de Martin Amis, ce long métrage
							offre une perspective troublante sur l'Holocauste, en explorant les zones d'ombre de l'horreur et de la
							culpabilité. Les décors et les costumes sont soigneusement conçus pour recréer l'ambiance sinistre de
							cette période sombre de l'histoire.<br>
							L’intrigue se déroule à travers la vie d’une famille nazie habitant à côté du camp d’Auschwitz car le
							père Rudolf Höss en est le commandant. Celle-ci vit dans une grande maison avec un grand jardin aux
							aspects paradisiaques. Les principaux thèmes qui ressortent de ce film sont le cloisonnement et la
							banalité/banalisation du mal. On retrouvera donc tout au long de l’histoire un fort contraste entre la
							maison et le camp mais aussi l’aspect banal des faits.<br><br>
							Le cloisonnement se ressent par l’enfermement que produisent les plans, qui seront la plus part
							du temps des gros plans renfermant donc le personnage dans un cadre et à l’aide des champs contre
							champ formant comme un labyrinthe où se déambule les membres de la famille. Il est aussi bien
							visible par le décor, principalement par le grand mur qui sépare le jardin du camp, marquant une
							grande séparation entre le côté horreur et le côté paradisiaque. Effectivement, le luxe de la famille est
							bien présent par déjà la grandeur de leur demeure, le fait qu’ils ont des domestiques, et le grand jardin
							qui ressemble plus ou moins à une jungle avec toutes les fleurs qui s’y trouvent. On comprend alors
							que celles-ci essayent d’effacer le mur, d’effacer l’horreur qui se trouve juste derrière. C’est justement
							ce que Jonathan Glazer produit avec ce film, de nous faire comprendre ce qu’il se passe sans nous en
							montrer les horreurs pour autant. Ce qui en rend le film dérangeant car les atrocités qui se passent dans
							le camp sont plus souvent évoquées par les bruits sonores, des bruits de fonds constant : les hurlements
							des prisonniers, les tirs des soldats, les aboiements de chien, les sifflements des trains ainsi que les
							machines qui font tourner les fours du camp. Et quelques fois visible mais très subtile comme la fumée
							qui sort des cheminées de ce qu’on en devine être le crématorium, les traces de sang sur les bottes du
							commandant ou encore lorsque Rudolf emmène 2 de ses enfants à la rivière et qu’il trouve des
							ossement humains.<br><br>
							Un autre point marquant du film, est la banalisation du mal qui a lieu tout au long du film. Un
							des premiers éléments qui nous font nous rendre compte de celle-ci c’est l’obsession envers la
							propreté. Les domestiques passent leurs temps à toujours tout nettoyer dans la maison pour que celleci soit totalement aseptisée, tout est parfaitement à sa place, ordonné. Celle-ci se manifeste pour tout
							ce qui est relié aux juifs (physiquement ou symboliquement), lorsque Rudolf couche avec une juive
							ou quand les enfants sont en contact avec des cendres, un nettoyage en profondeur s’effectue à la suite
							de ces événements. Les membres de la famille Höss, de part leurs propos, participent aussi à cette
							banalisation. On a une opposition entre Rudolf et son approche sérieuse de l’exécution, et Hedwig qui
							de par sa haine ouverte envers les juifs, s’autorise de nombreuses plaisanteries sur leurs traitement et
							leurs exécution. Mais également chez les enfants qui ne se rendent pas compte de l’ampleur et de
							l’atrocité de la chose. Par exemple l’un d’eux collectionne des dents de juifs tandis qu’un autre
							s’amuse à reproduire avec ses petits soldats le conflit actuel. Enfin, via le jeu d’acteur en lui-même, où
							par exemple, Christian Friedel (Rudolf) a constamment des expressions faciales neutres renforçant la
							distance vis-à-vis de ses actes, accentuant la banalité du mal.<br><br>
							Ce film de Jonathan Glazer est formé sur le contraste entre la vie d’une famille qui semble
							banale et les horreurs qui se passent juste à côté dans le camp, absente en apparence, mais
							constamment rappelée par une multitude d’éléments sonores et également visuels qui surviennent tout
							au long du film. `,
				image: "user.png",
			},
			{
				id: 1,
				username: "Charlotte Daniel",
				message: `La zone d’intérêt (ou Zone of interest) sorti le 31 Janvier 2024, est un drame historique
							américano-britannico-polona	is réalisé par Jonathan Glazer, connu pour ses images austères et
							terrifiantes. Il s’agit d’une adaptation du roman (du même nom) de Martin Amis. Ce film nous
							présente la vie de la famille de Rudolf Höss habitant à côté du camp d’Auschwitz-Birkenau dont il est
							responsable, dans une maison et un jardin aux aspects idyllique.<br><br>
							L’élément majeur que nous retrouvons tout le long de ce film, est le cloisonnement. Il est bien
							évidemment physique, avec un enfermement ressenti à l’extérieurdans le jardin avec ce mur
							d’enceinte qui ferme toute profondeur de champ, le portail qui forme une grille etégalement à
							l’intérieur de la maison avecles couloirs qui sont étroits.Ce cloisonnement est également
							psychologique, traduit à l’écran par la présence imposante des murs, où chaque pièce est filmée en
							diagonale, encerclant les personnages de trois des quatre murs, et par les plans en eux-mêmes,
							puisqu’ils sont fixes et positionnés aux mêmes endroits dans chaque pièce, comme des caméras de
							surveillance.<br><br>
							Bien que nous suivions uniquement la vie de la famille du commandant Rudolf Höss et ne
							passons pas de l’autre côté du mur vers le camp, la présence de celui-ci et des horreurs qui s’y
							déroulent nous sont tout de même perceptibles. De manière sonore avec ces cris et bruits dissonants,
							et visuellement par la fumée qui sort des cheminées de ce qu’on devine être le crématorium.Par les
							fondus au rouge accompagnés de ces cris et par le jardin qui bien que semblant paradisiaque avec ses
							fleurs, sa piscine, ses plantes, la scène où le jardinier verse des cendres sur celles-ci nous glace le sang
							car ces cendres viennent surement de derrière le mur.Ici, Jonathan Glazer décide de poser des indices
							de l’horreur faisant ainsi appel à notre mémoire collective, sans nécessairement avoir besoin de
							montrer pour que nous comprenions ce qu’il se passe.<br><br>
							Concernant le personnage de Rudolf Höss, bien que nous le voyions ici plus en père de famille
							que commandant, à nouveau, des éléments nous rappellent ce qu’il fait réellement, apporter la mort.
							Via ses habits, avec la tête de mort brodée au col, ou encore avec ses bottes tachées de sang. Mais
							également via la mise en scène où dans une séquence, il éteint les lumières et ferme les portes sur
							son passage, comme s’il éteignait la lumière de la vie et en fermait sa porte.<br><br>
							Ce film de Jonathan Glazer est formé sur la contradiction entre le calme de la famille vivant
							dans une maison aux aspect idyllique et les horreurs qui se passent juste à côté.Cette contradiction
							est représentée de différentes manières. Sonore,entre le son calme intra diégétique de la maison et
							les cris et bruits de l’atrocité qui nous viennent de derrière les murs du camp.Et visuelle, via les
							couleurs avec celle de la maison de la famille Höss qui sont chaudes, tandis que celle du bâtiment des
							SS ainsi que du mur du camp sont dans les tons froids. Opposant la chaleur et ce côté idyllique de la
							maison, à la froideur des décisions et des actes qui se réalisent en ces lieux.	`,
				image: "user.png",
			},
			{
				id: 2,
				username: "Beaugrand Lys (Lilou)",
				message: `Zone of interest est un film de Jonathan Glazer réalisé en 2023. Ce film se passe
						dans le contexte de la seconde guerre mondiale en Allemagne, dans la maison
						d’une famille habitant à côté de camps de Auschwitz. Ce film nous montre la vie
						de cette famille et les conséquences d’être les voisins d’un camps de
						concentration, sans vraiment nous montrer les choses explicitement. Ce film est
						grandement intéressant et instructif quant à son propos historique de l’Allemagne
						Nazie et ses horreurs, mais il faut savoir le comprendre car même si certaines
						choses sont explicitement dites et montrées, la majorité des faits sont sousentendus et c’est au spectateur de les comprendre pour percevoir l’horreur de
						cette histoire.<br><br>
						Il est évident que le film a un sujet historique, mais il est réalisé de manière très
						artistique car ce film est esthétiquement très beau, avec beaucoup de plans larges
						et colorés sur le jardin fleurit de la maison familiale, mais aussi des effets de
						montages tel que le fondu au rouge, et les scènes de la jeune fille déposant de la
						nourriture en infrarouges, ajoutant un style décalé de ce qui est généralement
						utilisé au cinéma, voir psychologique, avec notamment le fondu au rouge qui fait
						écho au sang des victimes juives dans le camp, et l’utilisation de l’infrarouge
						donnant l’impression que le personnage est constamment surveillé, créant de
						l’anxiété pour le spectateur. Le fait que la maison est à côté du camps est une
						évidence, par les nombreux plans larges dans le jardin, est distinguable le camp au
						dessus du mur d’enceinte de la maison qui la sépare du camp, mais aussi avec les
						plans à l’intérieur de la maison où l’on aperçois les cheminées à travers les
						fenêtres. Mais la majorité du film nous laisse comprendre les choses à travers le
						son plutôt que les images. Certaines scènes sont simples visuellement mais les
						cris d’effroi des victimes du camps d’Auschwitz en fond, contrastent avec ces
						plans simple de la vie quotidienne, de la famille en train de manger, des enfants qui
						jouent… Le hors champ est donc maître du sous-entendu dans ce film, ce qui
						n’efface en rien l’efficacité de la transmission de l’horreur au spectateur. Quant à
						l’atmosphère globale de cette famille et de leur maison, plusieurs éléments jouent
						pour rajouter du malaise, les dialogues quotidiens des personnages, mais aussi
						ceux des parents avec la mère riant du malheurs des juifs et exprimant
						ouvertement sa haine envers ces victimes de l’horreur Nazie. La musique et les
						bruits de fond, composés de sons graves et inhabituels, crée une dissonance
						perturbante pour le spectateur. Cet aspect se retrouve aussi avec cette obsession
						pour la propreté qu’ont les personnages, et ce besoin de se nettoyer constamment
						pour éviter tout contact avec les juifs, considérés “sales” par cette famille, comme
						montré lorsque le père s’en va immédiatement se laver les parties génitales dans
						un évier sous-terrain éloigné de sa maison immaculée, après avoir eu des relations
						sexuelles avec une femme juive, mais aussi après que les enfants se baignent
						dans une rivière, car on comprend par des ossements que le père trouve que cette
						eau est “contaminée” par les cendres et résidus des cadavres provenant du camp
						d’Auschwitz. L’éthique de cette famille est donc globalement malsaine. Cette
						maison créé une bulle entre la famille et l’horreur qui l’entoure, barrière séparant
						leur luxe de la vie du camps. Enfin, cette famille pourrait nous sembler banale dans
						leur comportement, avec un père présent pour ses enfants, des petites fêtes en
						famille ou entre amis, etc, mais le spectateur est toujours ramené à la réalité par
						tout les indices d’horreur, mais aussi par les discours radicaux de la mère, le père
						faisant sont travail, et les bruits d’ambiance tout au long du film. Zone of interest
						est donc un film très interessant psychologiquement, par sa manière de nous
						représenter un temps historique connu de tous d’une nouvelle manière, mais
						toujours en nous confirmant ses horreurs, et artistiquement parlant, car le film est
						très beau visuellement, de plus que cet esthétique prend une grande place dans le
						film car les dialogues sont plutôt omniprésents. Cependant le film manque d’action
						précise et explicite ce qui crée un rythme très lent et calme contrairement au sujet,
						sujet étant d’ailleurs très fort et intéressant de par son impact historique, dont
						toutes les horreurs sont connues et explicitées, et donc pour une fois ici montrée
						différemment mais sans pour autant s’en éloigner.`,
				image: "user.png",
			},
		],
	},
];

movieCards.forEach((card) => {
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
		// Create the html here
	}
});

function loadModal(id) {
	modalOverlay.style.display = "flex";

	const modal = document.querySelector(".modal");
	const filmContainer = document.querySelector(".film-container");
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
						${selectedContent.genres.join(", ")}
					</p>
				</div>
			</div>
			<section class="commentaires">
				<h3>Critiques</h3>
				${selectedContent.commentaires
					.map(
						(commentaire) => `
						<div class="commentaire">
							<div class="top_part">
							<img src="${commentaire.image}" alt="User Image" class="user-image" />
							
							<p class="username">${commentaire.username}</p>
							</div>
							<div class="comment-content">
								<p class="message">${commentaire.message}</p>
							</div>
						</div>
					`
					)
					.join("")}
			</section>
	`;

	filmContainer.innerHTML = filmHTML;

	modal.appendChild(filmContainer);
}
