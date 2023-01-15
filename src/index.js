function component() {
	const element = document.createElement('div');

	element.innerHTML = 'hello webpsack';

	return element;
}

document.body.appendChild(component());
