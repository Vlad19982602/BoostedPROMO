const hamburgerer = (nav, navItem, hamburger) => {
	nav = document.querySelector('.nav__list');
	navItem = document.querySelectorAll('.nav__item');
	hamburger = document.querySelector('.hamburger');



	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger__active');
		nav.classList.toggle('nav__list-active');
	});

	navItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger__active');
			nav.classList.toggle('nav__item-active');
		})
	})
}

export default hamburgerer;
