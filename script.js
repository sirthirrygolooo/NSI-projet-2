// Selectionne les éléments de la gallerie correspondants
const posts = document.querySelectorAll('.gallery-item');

// Ajoute un click-event
posts.forEach(post => {
	post.addEventListener('click', () => {
		//Prends l'URL original de l'image
		const imgUrl = post.firstElementChild.src.split("?")[0];
		//Ouvre l'image dans un nouvel onglet
		window.open(imgUrl, '_blank');
	});
});

// Variables réprésentant le bouton de changement de thème et le corps de la page
var theme = document.getElementById('theme');
var body =  document.querySelector('body');
var btnFooter = document.getElementById('footer-btn');

// Création d'une variable de référence sur le thème de la page 
let is_black = true;

// Crée un click-event sur le bouton de thème
theme.addEventListener('click', () => {
	
	// Si la variable is_black vaut false changement du fonds en noir et de la couleur en blanc + changement du statut de is_black
	if (is_black == false) {
		body.style.background = "black";
		body.style.color = "white";
		is_black = true;
	}
	// Sinon changement du fond en blanc et de la couleur en noir + changement de statut de is_black
	else {
		body.style.background = "white";
		body.style.color = "black";
		is_black = false;
	}

});

let hasClicked = false;

btnFooter.addEventListener('click', () => {
	if (hasClicked == false) {
		alert("Y'a rien qui marche au cas ou");
	}
})

var settings = document.getElementById('settings');

settings.addEventListener('click', ()=> {
	alert('Nan ça marche pas :)');
})





                                                                      