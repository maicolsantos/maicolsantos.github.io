$('document').ready(function () {

	var content = $('.content'),
		lines = content.find(".lines"),
		info = content.find('.info'),
		worksBtn = $('.works-btn'),
		line = worksBtn.find('.line'),
		perfil = $('.perfil'),
		maicol = $('.maicol'),
		form = $('.form');

	TweenMax.set(lines.find('p'), { css: { transform: 'translateX(-800px)' } });
	TweenMax.set(info.children(), { css: { transform: 'translateY(500px)' } });
	TweenMax.set(worksBtn, { css: { transform: 'translateX(500px)' } });

	setTimeout(function () {

		TweenMax.staggerTo(lines.find('p'), 1, {
			css: { transform: 'translateX(0px)' },
			ease: Expo.easeOut
		}, 0.1);

		TweenMax.staggerTo(info.children(), 1, {
			css: { transform: 'translateY(0)' },
			ease: Expo.easeOut,
			delay: 0.7
		}, 0.2);

		TweenMax.staggerTo(worksBtn, 1, {
			css: { transform: 'translateX(0)' },
			ease: Expo.easeOut,
			delay: 0.7
		}, 0.2)

	}, 800);

	var cores = [ '#01b9ff', '#8bc34a', '#ff4081', '#ffcd40', '#ffffff' ];

	lines.children().each(function(i, elem) {
		$(elem).on('mouseover', function (e) {
			
			var pos = $(elem).offset().left,
				$pos = (pos + (i * 20)),
				mousePos = ((e.pageX - $(elem).offset().left)),
				randomColor = cores[Math.floor(Math.random() * cores.length)];
			
			TweenMax.to($(elem), 1, {
				css: { transform: 'translateX('+$pos+'px)', color: randomColor },
				ease: Expo.easeOut
			});

			if(!isElementInViewport($(elem))) {
				TweenMax.killTweensOf($(elem));
				TweenMax.set($(elem), { css: { transform: 'translateX(-800px)' } });
				TweenMax.to($(elem), 1, { 
					css: { transform: 'translateY(0px)' },
					ease: Expo.easeOut
				});
			}

		});
	});

	$('.link.mail').on('mouseover', function () {
		TweenMax.killTweensOf('.linecc');
		TweenMax.set('.linec', { right: 'inherit', left: 0 });
		TweenMax.to('.linec', 0.5, { width: '100%', ease: Expo.easeInOut });
	})
	.on('mouseleave', function () {
		TweenMax.killTweensOf('.linec');
		TweenMax.set('.linec', { left: 'inherit', right: 0 });
		TweenMax.to('.linec', 0.5, { width: '0%', ease: Expo.easeInOut });
	});	

	$('.link.git, .link.fb').on('mouseover', function () {
		TweenMax.killTweensOf($(this));
		TweenMax.to($(this), 1, { y: -5, ease: Elastic.easeOut });
	})
	.on('mouseleave', function () {
		TweenMax.killTweensOf($(this));
		TweenMax.to($(this), 1.5, { y: 0, ease: Elastic.easeOut });
	});

	function isElementInViewport (el) {

	    //special bonus for those using jQuery
	    if (typeof jQuery === "function" && el instanceof jQuery) {
	        el = el[0];
	    }

	    var rect = el.getBoundingClientRect();

	    return (
	        rect.top >= 0 &&
	        rect.left >= 0 &&
	        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
	        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
	    );
	}



	/* WORKS */

	// Btn X
	perfil.hide();
	TweenMax.set(maicol, { css: { transform: 'translateY(500px)', opacity:0 } });
	

	worksBtn.on('click', function () {

		if(!$(this).hasClass('opened')) {
			TweenMax.killTweensOf(line);
			$(this).addClass('opened');

			perfil.fadeIn('slow');
			TweenMax.staggerTo(maicol, 1, {
				css: { transform: 'translateY(0)',opacity:1 },
				ease: Expo.easeOut,
				delay: 0.7
			}, 0.2),
			TweenMax.staggerTo(perfil, 1, {
				css: {opacity:1 },
				ease: Expo.easeOut,
				delay: 0.7
			}, 0.2)


			xis();
		}
		else {
			TweenMax.killTweensOf(line);
			$(this).removeClass('opened');
			menu();

			TweenMax.staggerTo(maicol, 1, {
				css: { transform: 'translateY(-1000px)',opacity:0 },
				ease: Expo.easeOut,
				delay: 0.2
			}, 0.2),
			TweenMax.staggerTo(perfil, 1, {
				css: {opacity:0 },
				ease: Expo.easeOut,
				delay: 0.7
			}, 0.2),

			setTimeout(function () {
				perfil.hide();
				TweenMax.set(maicol, { css: { transform: 'translateY(500px)', opacity:0 } });

			},2000);

		}





		function xis() {
			TweenMax.to('.line.um', 0.5, { css: { rotationZ: 45, top: 10 }, ease: Expo.easeInOut });
			TweenMax.to('.line.tres', 0.5, { css: { rotationZ: -45, top: -10 }, ease: Expo.easeInOut });
			TweenMax.to('.line.dois', 0.5, { css: { opacity: 0 }, ease: Expo.easeOut});
		}

		function menu () {
			TweenMax.to('.line.um', 0.5, { css: { rotationZ: 0, top: 0 }, ease: Expo.easeInOut });
			TweenMax.to('.line.tres', 0.5, { css: { rotationZ: 0, top: 0 }, ease: Expo.easeInOut });
			TweenMax.to('.line.dois', 0.5, { css: { opacity: 1 }, delay: 0.3, ease: Expo.easeOut});
		}

	});


	var Slider = $('.slider'),
		navSlider = $('.nav-slide'),
		ww = screen.width,
		rsSlide = $('.rsSlide');


		Slider.royalSlider({
			slidesSpacing: 0,
			loop: true,
			navigateByClick: false,
			autoPlay:{
				enabled: true,
				pauseOnHover: true,
				delay: 3000
			}
		});

		var sld = Slider.data('royalSlider');

		$('.nav-next').click(function () { sld.next(); });
		$('.nav-prev').click(function () { sld.prev(); });


		if(ww <= 767){
			rsSlide.css({
				display:'none'
			});
		}
		
	form.submit(function(){
		var dados = $( this ).serialize();

		$.ajax({
			type: "POST",
			url: "http://maicolsantos.com/envia.php",
			data: dados,
			success: function( data )
			{

				$('.btn-enviar').css({
					background: '#77b6a7',
					borderBottom:'3px solid #61a18f'
				});
				$('.btn-enviar').addClass('enviado');
			
			}
		});
		
		return false;
	});





});
