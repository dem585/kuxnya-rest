$(function(){

// Слидер
$('.slider').slick({
	dots:true,
	arrows:false,
	fade:true,
	autoplay:5000

});
// меню кнопка
	$('.menu__btn').on('click',function(){
		$('.menu__btn').toggleClass('menu__btn--active');
		$('.menu-m').toggleClass('menu__list--active');
	});


// меню
	$('.menu-cock__menu-link').on('click', function(){
		$('.menu-cock__menu-list').removeClass('activ');
		$(this).parent().addClass('activ');
	});

	$('.menu-c').on('click', function(){
		$('.menu-cock__block-prais').removeClass('activ-op');
		$('.menu-c-a').addClass('activ-op');
	});
	$('.menu-pi').on('click', function(){
		$('.menu-cock__block-prais').removeClass('activ-op');
		$('.menu-pi-a').addClass('activ-op');
	});
	$('.menu-pa').on('click', function(){
		$('.menu-cock__block-prais').removeClass('activ-op');
		$('.menu-pa-a').addClass('activ-op');
	});
	$('.menu-de').on('click', function(){
		$('.menu-cock__block-prais').removeClass('activ-op');
		$('.menu-de-a').addClass('activ-op');
	});
	$('.menu-w').on('click', function(){
		$('.menu-cock__block-prais').removeClass('activ-op');
		$('.menu-w-a').addClass('activ-op');
	});
	$('.menu-b').on('click', function(){
		$('.menu-cock__block-prais').removeClass('activ-op');
		$('.menu-b-a').addClass('activ-op');
	});
	$('.menu-dr').on('click', function(){
		$('.menu-cock__block-prais').removeClass('activ-op');
		$('.menu-dr-a').addClass('activ-op');
	});
  
});


// проверка коректности написания email
function validation(){
	var form = document.getElementById("form");
	var email = document.getElementById("email").value;
	var text = document.getElementById("text-email");
	var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
		if (email.match(pattern)) {
			form.classList.add("valid");
			form.classList.remove("invalid");
			text.innerHTML ="";
			text.style.color = "green"
		}
		else{
			form.classList.remove("valid");
			form.classList.add("invalid");
			text.innerHTML ="Проверте email";
			text.style.color = "red"
		}

		if (email == "") {
			form.classList.remove("valid");
			form.classList.remove("invalid");
			text.innerHTML ="";
			text.style.color = "red"
		}
}


// магнифик попап
$(document).ready(function() {
	$('.gallery__inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
});

