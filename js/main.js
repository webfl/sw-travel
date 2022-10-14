//HEADER SCROLL
const headScroll = document.querySelector('.header');
window.onscroll = function() {
	if (window.pageYOffset > 50) {
		headScroll.classList.add('header_active')
	} else {
		headScroll.classList.remove('header_active');
	}
}
//=====================================================================//

//BURGER MENU
const burgerItem = document.querySelector('.burger');
const navMenu = document.querySelector('.header__nav');
const headerList = document.querySelector('.header__list');
const headerItems = document.querySelectorAll('.header__item');

//const navCross = document.querySelector('.header__nav-cross');


burgerItem.addEventListener("click", function(e) {
	document.body.classList.toggle('lock');
	navMenu.classList.toggle('header__nav_active');
	burgerItem.classList.toggle('header__nav_active');
});


function closeBurgerMenu(event) {
	if (event.target.classList.contains('header__link')) {
		burgerItem.classList.remove('lock');
		navMenu.classList.remove('header__nav_active');		
		burgerItem.classList.remove('header__nav_active');
	}
}
navMenu.addEventListener('click', closeBurgerMenu)
//=====================================================================

//Scroll to anchors
(function () {

	const smoothScroll = function (targetEl, duration) {
		const headerElHeight = document.querySelector('.header').clientHeight;
		let target = document.querySelector(targetEl);
		let targetPosition = target.getBoundingClientRect().top - headerElHeight;
		let startPosition = window.pageYOffset;
		let startTime = null;

		const ease = function (t, b, c, d) {
			t /= d / 2;
			if (t < 1) return c / 2 * t * t + b;
			t--;
			return -c / 2 * (t * (t - 2) - 1) + b;
		};

		const animation = function (currentTime) {
			if (startTime === null) startTime = currentTime;
			const timeElapsed = currentTime - startTime;
			const run = ease(timeElapsed, startPosition, targetPosition, duration);
			window.scrollTo(0, run);
			if (timeElapsed < duration) requestAnimationFrame(animation);
		};
		requestAnimationFrame(animation);

	};

	const scrollTo = function () {
		const links = document.querySelectorAll('.js-scroll');
		links.forEach(each => {
			each.addEventListener('click', function () {
				const currentTarget = this.getAttribute('href');
				smoothScroll(currentTarget, 1000);
			});
		});
	};
	scrollTo();
}());
//=====================================================================//

