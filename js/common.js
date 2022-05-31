document.addEventListener('DOMContentLoaded', function() {

  MicroModal.init({
		openTrigger: 'data-custom-open',
		closeTrigger: 'data-custom-close',
		disableScroll: true,
		disableFocus: true,
		awaitOpenAnimation: true,
		awaitCloseAnimation: true
	})

	$('[data-custom-open]').click(function(){
		$('.modal [name=form]').val($(this).data('form'))
	})

	$('[data-custom-close]').click(function(){
		$('.modal [name=form]').val('')
	})
  
	/* Menu */

	function toggleMenu() {
		$('.nav__toggle').toggleClass('nav__toggle--active')
		$('.nav__list').toggleClass('nav__list--active')
	}

	$('.nav__toggle').click(function() {toggleMenu()})


	function closeMenu() {
		$('.nav__toggle').removeClass('nav__toggle--active')
		$('.nav__list').removeClass('nav__list--active')
	}

	$(document).click(function(e) {
		if ($(e.target).closest('.top-nav').length) return
		closeMenu()
	})


	/*  Slider */

	const homeSlider = new Swiper('.home-slider', {
  // Optional parameters
	speed: 800,
  effect: 'fade',
	centeredSlides: true,
  pagination: {
			el: '.home-slider__pagination',
			type: 'custom',
			renderCustom: function(swiper, current, total) {
				let indT = total >= 10 ? total : `0${total}`
				let indC = current >= 10 ? current : `0${current}`
				return `<b>${indC}</b><span></span> ${indT}`
			}
	},
	scrollbar: {
		el: '.home-slider__scrollbar',
		draggable: true
	},
	navigation: {
		prevEl: '.home-slider__prev',
		nextEl: '.home-slider__next'
	},
	keyboard: {
		enabled: true,
		onlyInViewport: false
	},
	runCallbacksOnISnit: true 	
	})

  

	const aboutSlider = new Swiper('.home-about__slider', {
    autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		effect: 'fade',
		speed: 1400,
    loop: true,
		
	})

	

	

	// Callback List Numbers

	$('.home-callback__list li').each(function() {
		$(this).html($(this).text().replace(/([0-9.]+)/g, '<span>$1</span>'))
	})


})