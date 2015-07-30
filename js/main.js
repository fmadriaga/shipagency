(function ( $ ) {
	$.fn.parallax = function(){
		var element = $(this);
		var elmntScroll = $(this).offset().top;
		$(window).scroll(function(){
			var y = $(this).scrollTop();
			element.css("background-position-y", ((y - elmntScroll) / 2  + "px"));
		});
	};

	$.fn.scrollEffect = function(options){
		var settings = $.extend({
            container: window,
            seconds: 0
        }, options );

		$(this).each(function(){
			var $retorno = {};
			var $este = $(this);
			$(settings.container).scroll(function(){
				var scrollY = $(settings.container).scrollTop();
				var offtop = $este.offset().top - ($(window).height() / 1.5);
				if (scrollY > offtop && !$este.hasClass("scrolled")){
					$este.addClass("scrolled");
					if(options.elements && options.styles){
						for (var i = 0; i < options.elements.length; i++){
							var $element = options.elements[i];
							$retorno[i] = $element.css(options.styles[i]);
						}
					}
				}
				else if (scrollY < offtop && $este.hasClass("scrolled") && options.stylesBack){
					$este.removeClass("scrolled");
					if(options.elements && options.stylesBack){
						for (var i = 0; i < options.elements.length; i++){
							var $element = options.elements[i];
							$retorno[i] = $element.css(options.stylesBack[i]);
						}
					}
				}
				return $retorno;
			})
		});
	};

	$.fn.scrollBottom = function() { 
	    return $(document).height() - this.scrollTop() - this.height(); 
	};

}( jQuery ));