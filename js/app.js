function alterarStatus(id) {
	let item = document
		.getElementById(`game-${id}`)
		.querySelector('.dashboard__item__img');

	let botao = document
		.getElementById(`game-${id}`)
		.querySelector('.dashboard__item__button');

	if (item.classList.contains('dashboard__item__img--rented')) {
		item.classList.remove('dashboard__item__img--rented');
		botao.classList.remove('dashboard__item__button--return');
		botao.innerText = 'Alugar';
	} else {
		item.classList.add('dashboard__item__img--rented');
		botao.classList.add('dashboard__item__button--return');
		botao.innerText = 'Devolver';
	}
}
