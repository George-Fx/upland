$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};

	var $time = 100;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $time = 2000;
	} 
	setTimeout(function () {
		$( "head" ).append( '<link rel="stylesheet preload" href="css/fonts.css" as="style">' );

		if ($('.js-lazy').length) {
			$('.js-lazy').each(function() {
				var imgSrc = $(this).attr('data-src');
				var imgSrcset = $(this).attr('data-srcset');
				$(this).attr('src', imgSrc);
				$(this).attr('srcset', imgSrcset);
			});
		}
	}, $time);
});

/* viewport width */
function viewport(){
	var e = window,
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */


$(function(){

	var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
	if (isSafari) {
		$('body').addClass('safari');
	};

	/* lazy */
	if ($('.js-img').length) {
		var jsImg = $(".js-img");
		new LazyLoad(jsImg, {
			root: null,
			rootMargin: "0px",
			threshold: 0
		});
	};
	/* lazy */

	/* phone mask */
	if ($("input[type='tel']").length) {
		$("input[type='tel']").mask("+7 (999) 999-99-99");
	}
	/* phone mask */

});

var handler = function(){

	var height_footer = $('footer').height();
	var height_header = $('header').height();


	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;

	if (viewport_wid <= 991) {

	}

}

$(window).bind('load', handler);
$(window).bind('resize', handler);



