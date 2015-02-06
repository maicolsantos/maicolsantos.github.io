$('document').ready(function () {

	var content = $('#content'),
		lines = content.find(".lines"),
		info = content.find('.info');

	TweenMax.set(lines.find('p'), { css: { transform: 'translateX(-800px)' } });
	TweenMax.set(info.children(), { css: { transform: 'translateY(500px)' } });

	setTimeout(function () {

		TweenMax.staggerTo(lines.find('p'), 1, {
			css: { transform: 'translateX(0px)' },
			ease: Expo.easeOut
		}, 0.1);

		TweenMax.staggerTo(info.children(), 1, {
			css: { transform: 'translateY(0)' },
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
		TweenMax.killTweensOf('.line');
		TweenMax.set('.line', { right: 'inherit', left: 0 });
		TweenMax.to('.line', 0.5, { width: '100%', ease: Expo.easeInOut });
	})
	.on('mouseleave', function () {
		TweenMax.killTweensOf('.line');
		TweenMax.set('.line', { left: 'inherit', right: 0 });
		TweenMax.to('.line', 0.5, { width: '0%', ease: Expo.easeInOut });
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
	var worksBtn = $('.works-btn'),
		line = worksBtn.find('.line');

	worksBtn.on('click', function () {

		if(!$(this).hasClass('opened')) {
			TweenMax.killTweensOf(line);
			$(this).addClass('opened');
			xis();
		}
		else {
			TweenMax.killTweensOf(line);
			$(this).removeClass('opened');
			menu();
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


});