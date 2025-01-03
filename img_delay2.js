$(window).load(function(){
	var touchChange = 0;
	var scrChange = 0;

	var actionType;
	if(navigator.userAgent.indexOf('Android') !== -1){
		actionType = "scroll";
	}else {
		actionType = "touchstart";
	}


	//touch change
	function gifChange(){
		$('.t_img').each(function() {
			var touchSrc = $(this).attr('src').replace('.jpg', '.gif');
			$(this).attr('src', touchSrc);
		});
		$('.t_bg').each(function() {
			var touchBgSrc = $(this).css("background-image").replace('.jpg', '.gif');
			$(this).css('background-image', touchBgSrc);
		});
		console.log('touchChange');
		touchChange = 1;
	}

	jQuery(window).bind(actionType, function() {
		if(touchChange == 0){
			gifChange();
		}
	});

	//scroll change
	function dummyChange(){
		$('.s_img').each(function() {
			var scrSrc = $(this).attr('src').replace('pximg/', '');
			$(this).attr('src', scrSrc);
			//console.log('img='+scrSrc);
		});
		$('.s_bg').each(function() {
			var scrBgSrc = $(this).css("background-image").replace('pximg/', '');
			$(this).css('background-image', scrBgSrc);
			console.log('bg='+scrBgSrc);
		});
		console.log('scrChange');
		scrChange = 1;
	}

	jQuery(window).scroll(function() {
		if(scrChange == 0){
			var changePoint = jQuery('[class*=change_point]').offset().top;
			var scrPoint = window.innerHeight + jQuery(window).scrollTop();
			//console.log("changePoint="+changePoint);
			//console.log("scrPoint="+scrPoint);
			if ((changePoint - scrPoint) / changePoint <= 0.05) {
				dummyChange();
			}
		}
	});

});