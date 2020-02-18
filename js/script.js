let backToTopBtn = document.querySelector('#backToTopBtn');


// checa a posição do scroll a cada 500ms, somente para ocultar e mostrar o header
let y = 0;
let header = document.querySelector('.hiddenHeaderLine');
let checkScrollPos = 0;
backToTopBtn.style.bottom = '-100px';
setInterval(checkScrollPosition, 500);
function checkScrollPosition() {
	checkScrollPos = y;
};


window.addEventListener('scroll', function() {

	y = window.scrollY || document.documentElement.scrollTop;

	if(y > checkScrollPos) {
		header.style.top = '-20%';
		backToTopBtn.style.bottom = '-100px';
	} else {
		header.style.top = '0px';
		backToTopBtn.style.bottom = '40px';
	};
	if(y <= 40) {
		header.style.top = '-20%';
		backToTopBtn.style.bottom = '-100px';
	};
});

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.querySelector(".headerLogoWrapper").style.transform = 'scale(0.65) translateY(-60px)';
//     document.querySelector(".hamburguerMenuWrapper").style.transform = 'scale(0.85) translateY(-20px)';
//   } else {
//     document.querySelector(".headerLogoWrapper").style.transform = 'scale(1) translateY(0px)';
//     document.querySelector(".hamburguerMenuWrapper").style.transform = 'scale(1) translateY(0px)';
//   };
// };

let mobileMenu = document.querySelector('.mobileMenu');
let hamburguerMenu = document.querySelector('.hamburguerMenu');
let hamburguerMenuMobile = document.querySelector('.hiddenHamburguerMenuWrapper');
let closeMobileMenuBtn = document.querySelector('.closeMobileMenuBtnWrapper');
let mobileMenuLogo = document.querySelector('.mobileMenuLogoWrapper');
function showMobileMenu() {
	console.log('click');
	mobileMenu.animate(
		[
		{ transform: 'translateX(-110%)' },
		{ transform: 'translateX(0%)' },
		], {
			duration: 500,
			fill: 'forwards',
			easing: 'cubic-bezier(1, 0, 0, 1)',
		});
	fadeInMobileMenuBtn(document.querySelector('.mobileMenubtnsWrapper div:nth-of-type(1)'), 200);
	fadeInMobileMenuBtn(document.querySelector('.mobileMenubtnsWrapper div:nth-of-type(2)'), 300);
	fadeInMobileMenuBtn(document.querySelector('.mobileMenubtnsWrapper div:nth-of-type(3)'), 400);
	fadeInMobileMenuBtn(document.querySelector('.mobileMenubtnsWrapper div:nth-of-type(4)'), 500);
	fadeInMobileMenuBtn(document.querySelector('.mobileMenubtnsWrapper div:nth-of-type(5)'), 600);
	showMobileLogo();
};

function hideMobileMenu() {
	console.log('click');
	mobileMenu.animate(
		[
			{ transform: 'translateX(0%)' },
			{ transform: 'translateX(-110%)' },
		], {
			duration: 500,
			fill: 'both',
			easing: 'cubic-bezier(1, 0, 0, 1)',
		});
};

function showMobileLogo() {
	mobileMenuLogo.animate(
		[
			{ transform: 'translateY(-50%)', opacity: 0 },
			{ transform: 'translateY(0%)', opacity: 1 },
		], {
			duration: 500,
			fill: 'both',
			easing: 'ease-in-out',
			delay: 500,
		});
};


mobileMenu.addEventListener('click', function(el) {
	el.target.classList.contains('mobileMenuBtn') ? hideMobileMenu() : undefined;
})


function fadeInMobileMenuBtn(el, delayItem) {
	el.animate(
		[
			{ transform: 'translateX(-50%)', opacity: '0' },
			{ transform: 'translateX(0%)', opacity: '1' },
		], {
			duration: 500,
			fill: 'both',
			easing: 'cubic-bezier(1, 0, 0, 1)',
			delay: delayItem,
		})
};

hamburguerMenu.addEventListener('click', showMobileMenu);
hamburguerMenuMobile.addEventListener('click', showMobileMenu);
closeMobileMenuBtn.addEventListener('click', hideMobileMenu);
var x = window.matchMedia("(max-width: 799px)");

function myFunction(x) {
	if (x.matches) {
		let instas = document.querySelectorAll('.sectionInstagram amp-instagram');
		instas = Array.from(instas);
		for(let i = 0; i <= instas.length -1; i++) {
		instas[i].id = 'instaBlock1NoParallax' + (i+1);
		};
		console.log(instas);

		let news = document.querySelectorAll('.newsWrapper .newsBlockUnit');
		news = Array.from(news);
		for(let i = 0; i <= news.length -1; i++) {
		news[i].id = 'newsBlockUnitNoParallax' + (i+1);
		};
		console.log(news);
	} else {
		let instas = document.querySelectorAll('.sectionInstagram amp-instagram');
		instas = Array.from(instas);
		for(let i = 0; i <= instas.length -1; i++) {
		instas[i].id = 'instaBlock' + (i+1);
		};
		console.log(instas);

		let news = document.querySelectorAll('.newsWrapper .newsBlockUnit');
		news = Array.from(news);
		for(let i = 0; i <= news.length -1; i++) {
		news[i].id = 'newsBlockUnit' + (i+1);
		};
		console.log(news);
	};
};

myFunction(x);
x.addListener(myFunction);