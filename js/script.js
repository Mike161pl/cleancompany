document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const allNavItems = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-collapse')
	const navButton = document.querySelector('.navbar-toggler')
	const footerYear = document.querySelector('.footer__year')

	function addShadow() {
		if (window.scrollY >= 50) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}
	function buttonShadow() {
		if (window.scrollY >= 0){
			nav.classList.add('shadow-bg')
		}
	}

	allNavItems.forEach(item =>
		item.addEventListener('click', () => {
			navList.classList.remove('show')
		})
	)
	const handleCurrentYear = () => {
		const year = new Date().getFullYear()
		footerYear.innerText = year
	}
	
	handleCurrentYear()
	window.addEventListener('scroll', addShadow)
	navButton.addEventListener('click', buttonShadow)
})
