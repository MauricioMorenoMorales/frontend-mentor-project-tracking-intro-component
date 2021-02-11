const $burger = document.querySelector('.hamburger'),
	$plegableMenu = document.querySelector('.header__menu--mobile')

document.addEventListener('click', e => {
	if (e.target.matches('.hamburger') || e.target.matches('.hamburger *')) {
		$burger.classList.toggle('is-active')
		$plegableMenu.classList.toggle('is-active')
	}
})
