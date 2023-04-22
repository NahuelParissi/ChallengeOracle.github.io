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
		hiddenInput.value = e.currentTarget.querySelector('.titulo').innerText;
	});
});

select.addEventListener('click', () => {
	select.classList.toggle('active');
	opciones.classList.toggle('active');
});

const salida = document.querySelector('.salida')
const text = document.querySelector('.text')
const titulo = document.querySelector('.titulo')
const p = document.querySelector('.p')
const p2 = document.querySelector(".text-s p")
const p3 = document.querySelector(".text-s h2")

document.getElementById("dark-mode").addEventListener("change", function() {
	if (this.checked) {
	  document.body.style.backgroundColor = "#242424";
	  salida.style.setProperty("background", "#505050")
	  text.style.setProperty("background", "#242424")
	  titulo.style.setProperty("color", "white")
	  opciones.style.setProperty("background", "#242424")
	  p.style.color = 'white'
	  p2.style.color = 'white'
	  p3.style.color = 'white'

	} else {
	  document.body.style.backgroundColor = "";
	  salida.style.setProperty("background", "")
	  text.style.setProperty("background", "")
	  titulo.style.setProperty("color", "")
	  opciones.style.setProperty("background","")
	  p.style.color = "#242424";
	  p2.style.color = "#242424";
	  p3.style.color = "#242424";

	}
  });