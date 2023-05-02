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
const tEncripted = document.getElementById("textEncripted")
const img1 = document.getElementById('img1')
const img2 = document.createElement('img')

document.getElementById("dark-mode").addEventListener("change", function () {
	if (this.checked) {
		document.body.style.backgroundColor = "#242424";
		salida.style.setProperty("background", "#505050")
		textInput.style.setProperty("background", "#242424")
		textInput.style.setProperty("color", "white")
		titulo.style.setProperty("color", "white")
		opciones.style.setProperty("background", "#242424")
		p.style.color = 'white';
		tEncripted.style.color = 'white';
		img2.src = 'img/!2.png';
		img1.parentNode.replaceChild(img2, img1)

	} else {
		document.body.style.backgroundColor = "";
		salida.style.setProperty("background", "")
		textInput.style.setProperty("background", "")
		textInput.style.setProperty("color", "")
		titulo.style.setProperty("color", "")
		opciones.style.setProperty("background", "")
		p.style.color = "#242424";
		tEncripted.style.color = "#242424";
		img2.parentNode.replaceChild(img1, img2)
	}
});

// Encript/Decrypt

function encrypt() {
	const originalText = document.getElementById('textOriginal').value;
	let encryptedText = originalText;

	encryptedText = encryptedText.replace(/e/g, 'enter');
	encryptedText = encryptedText.replace(/i/g, 'imes');
	encryptedText = encryptedText.replace(/a/g, 'ai');
	encryptedText = encryptedText.replace(/o/g, 'ober');
	encryptedText = encryptedText.replace(/u/g, 'ufat');

	document.getElementById('textEncripted').value = encryptedText;
}

function decrypt() {
	const encryptedText = document.getElementById('textOriginal').value;
	let decryptedText = encryptedText;

	decryptedText = decryptedText.replace(/enter/g, 'e');
	decryptedText = decryptedText.replace(/imes/g, 'i');
	decryptedText = decryptedText.replace(/ai/g, 'a');
	decryptedText = decryptedText.replace(/ober/g, 'o');
	decryptedText = decryptedText.replace(/ufat/g, 'u');

	document.getElementById('textEncripted').value = decryptedText;
}

const imagen = document.getElementById("imagen");
const encryptButton = document.getElementById("bttn-E");
const text = document.getElementById("textEncripted")

encryptButton.addEventListener("click", function () {
	imagen.style.display = "none";
	text.style.height = "550px";
});


//boton copiar//

function copiarTexto() {
	const encryptedText = document.getElementById("textEncripted");
	encryptedText.select();
	document.execCommand("copy");
	alert('Texto copiado');
}