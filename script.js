//Cambiar Idioma//

const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contenidoSelect = document.querySelector('#select .contenido-select');
const hiddenInput = document.querySelector('#inputSelect');
const textoP = document.querySelector('.p');
const textarea = document.querySelector('.text-input');
const textarea1 = document.getElementById('textEncripted');
const bttnEncrypt = document.getElementById('bttn-E');
const bttnDecrypt = document.getElementById('bttn-D');

document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        contenidoSelect.innerHTML = e.currentTarget.innerHTML;
        select.classList.toggle('active');
        opciones.classList.toggle('active');
        hiddenInput.value = e.currentTarget.querySelector('.contenido-opcion').innerText;
        // Obtener el valor de la opción seleccionada
        var opcionSeleccionada = e.currentTarget.querySelector('.contenido-opcion img').getAttribute("alt");
        // Actualizar el texto
        if (opcionSeleccionada === "es") {
            textoP.textContent = "Solo letras minúsculas y sin acentos";
            textarea.placeholder = "Ingrese el texto aquí...";
			textarea1.placeholder = "Ningun mensaje fue encontrado ... ";
            bttnEncrypt.textContent = "Encriptar";
            bttnDecrypt.textContent = "Desencriptar";
        } else if (opcionSeleccionada === "en") {
            textoP.textContent = "Lowercase letters only, no accents";
            textarea.placeholder = "Enter text here...";
			textarea1.placeholder = "No message found...";
            bttnEncrypt.textContent = "Encrypt";
            bttnDecrypt.textContent = "Decrypt";
        } else if (opcionSeleccionada === "br") {
            textoP.textContent = "Apenas letras minúsculas, sem acentos";
            textarea.placeholder = "Digite o texto aqui...";
			textarea1.placeholder = "Nenhuma mensagem encontrada...";
            bttnEncrypt.textContent = "Criptografar";
            bttnDecrypt.textContent = "Descriptografar";
        }
    });
});

select.addEventListener('click', () => {
    select.classList.toggle('active');
    opciones.classList.toggle('active');
});


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
