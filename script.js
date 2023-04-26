//Cambiar Idioma//

const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contenidoSelect = document.querySelector('#select .contenido-select');
const hiddenInput = document.querySelector('#inputSelect');

document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
		contenidoSelect.innerHTML = e.currentTarget.innerHTML;
		select.classList.toggle('active');
		opciones.classList.toggle('active');
		hiddenInput.value = e.currentTarget.querySelector('.contenido-opcion').innerText;
	});
});

select.addEventListener('click', () => {
	select.classList.toggle('active');
	opciones.classList.toggle('active');
});

//function//

const br = document.querySelector("#br")
const es = document.querySelector("#es")
const en = document.querySelector("#en")





//DarkMode//

const salida = document.querySelector('.salida')
const textInput = document.querySelector('.text-input')
const titulo = document.querySelector('.contenido-select')
const p = document.querySelector('.p')
const p2 = document.querySelector(".text-s p")
const p3 = document.querySelector(".text-s h2")
const p4 = document.querySelector('#text-out')
const img1 = document.getElementById('img1')
const img2 = document.createElement('img')


document.getElementById("dark-mode").addEventListener("change", function () {
	if (this.checked) {
		document.body.style.backgroundColor = "#242424";
		salida.style.setProperty("background", "#505050")
		textInput.style.setProperty("background", "#242424")
		titulo.style.setProperty("color", "white")
		opciones.style.setProperty("background", "#242424")
		p.style.color = 'white';
		p2.style.color = 'white';
		p3.style.color = 'white';
		p4.style.color = 'white';
		img2.src = 'img/!2.png';
		img1.parentNode.replaceChild(img2, img1)

	} else {
		document.body.style.backgroundColor = "";
		salida.style.setProperty("background", "")
		textInput.style.setProperty("background", "")
		titulo.style.setProperty("color", "")
		opciones.style.setProperty("background", "")
		p.style.color = "#242424";
		p2.style.color = "#242424";
		p3.style.color = "#242424";
		p4.style.color = "#242424"
		img2.parentNode.replaceChild(img1, img2)
	}
});

//encript pt1

const textN = document.querySelector('.n-text');
const textC = document.querySelector('.c-text');

function alternar() {
	if (textN.style.display === "flex") {
		textN.style.display = "none";
		textC.style.display = "flex";
	} else {
		textN.style.display = "flex";
		textC.style.display = "none";
	}
}


//boton copiar//

function copiarTexto() {
    var texto = document.getElementById('text-out');
    var tempTextArea = document.createElement('textarea');
    tempTextArea.value = texto.innerText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('Texto copiado: ' + texto.innerText);
}
