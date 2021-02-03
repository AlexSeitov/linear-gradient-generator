const colorGradientResult = document.querySelector('.color-gradient-result');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.body;

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

function setGradient() {
	body.style.background =
		'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';

	colorGradientResult.textContent = body.style.background;
}
