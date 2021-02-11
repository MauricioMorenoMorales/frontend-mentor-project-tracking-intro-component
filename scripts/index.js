const $burger = document.querySelector('.hamburger'),
	$plegableMenu = document.querySelector('.header__menu--mobile')

document.addEventListener('click', e => {
	if (e.target.matches('.hamburger') || e.target.matches('.hamburger *')) {
		$burger.classList.toggle('is-active')
		$plegableMenu.classList.toggle('is-active')
	}
	if (e.target.matches('.header__menu--mobile__link')) {
		$burger.classList.remove('is-active')
		$plegableMenu.classList.remove('is-active')
	}
})
