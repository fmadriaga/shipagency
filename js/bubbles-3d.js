(function ( $ ) {
	$.fn.bubbles3d = function(options){
		var settings = $.extend({
			container: $(this)
        }, options );
		$(this).find("li").each(function(){
			$(this).css("height", $(this).width() + "px");
		});
		$(this).find("li").each(function(){

			$(this).click(function(){
				$(this).parent("ul").find("li").each(function(){
					$(this).removeClass();
					$(this).addClass("bubbles-3d-item");
					$(this).addClass("bubbles-hidden");
				});
				var $thirdL, $secondL, $secondR, $thirdR;
				if($(this).prevAll().length > 0){
					$secondL = $(this).prev();
					$secondL.addClass("bubbles-second-left");
					$secondL.removeClass("bubbles-hidden");

					if($(this).prevAll().length > 1){
						$thirdL = $(this).prev().prev();
						$thirdL.addClass("bubbles-third-left");
						$thirdL.removeClass("bubbles-hidden");
					}
					else{
						$secondL.addClass("bubbles-penultimate-left");
					}
				}
				else{
					$(this).addClass("bubbles-last-left");
					$(this).removeClass("bubbles-hidden");
				}
				if($(this).nextAll().length > 0){
					$secondR = $(this).next();
					$secondR.addClass("bubbles-second-right");
					$secondR.removeClass("bubbles-hidden");
					if($(this).nextAll().length > 1){
						$thirdR = $(this).next().next();
						$thirdR.addClass("bubbles-third-right");
						$thirdR.removeClass("bubbles-hidden");
					}
				}
				else{
					$secondR = $(this).parent().find("li").first();
					$thirdR = $(this).parent().find("li").first().next();
				}

				$(this).addClass("bubbles-active");
				$(this).removeClass("bubbles-hidden");

				$(this).parent().find("li").each(function(){
					$(this).css("height", $(this).width() + "px");
				});

			});
		});
	};
}( jQuery ));
