jQuery(function(){
	//console.log('osNum = '+osNum);
	//console.log('adrNum = '+adrNum);
	//console.log('ptNum = '+ptNum);
	
	/*----------TOP画切り替え----------*/
	if(osNum == "0" || adrNum == "1"){
		var videoImgJ001 = jQuery('#header .top_img img').attr('src');
		var videoImgG001 = videoImgJ001.replace('jpg' , 'gif');
		var videoImgM001 = videoImgJ001.replace('jpg' , 'mp4');
		jQuery('#header .top_img').html('<video preload="auto" width="100%" height="auto" poster="'+videoImgJ001+'" loop muted autoplay playsinline><source src="'+videoImgM001+'"><source src="'+videoImgG001+'"></video>');
	}
	/*----------初動動画切り替え----------*/
	if(osNum == "0" || adrNum == "1"){
		var videoImgJ002 = jQuery('#content .video_box.video001 .video_thumb img').attr('src');
		var videoImgG002 = videoImgJ002.replace('jpg' , 'gif');
		var videoImgM002 = videoImgJ002.replace('jpg' , 'mp4');
		jQuery('#content .video_box.video001 .video_thumb').html('<video preload="auto" width="100%" height="auto" poster="'+videoImgJ002+'" loop muted autoplay playsinline><source src="'+videoImgM002+'"><source src="'+videoImgG002+'"></video>');
	}else{
		jQuery('#content .video_box.video001 .video_thumb').attr('src',videoImgG002);
	}
	/*--------------------loading--------------------*/
	var loadTimeout = setTimeout(function(){
		jQuery('#wrapper').removeClass('loading');
		jQuery('#modal_loading').hide();
		return_scroll();
	},10000);
	no_scroll();
	/*--------------------↓ (window).load(function ↓--------------------*/
	jQuery(window).load(function(){
		//loading終了
		clearTimeout(loadTimeout);
		jQuery('#wrapper').removeClass('loading');
		jQuery('#modal_loading').hide();
		return_scroll();
		/*--------------------famタグ使用（複数案件用）--------------------*/
		if(multi == "1"){
			var famCounter = 0;
			var totalDataEq = totalData - 1;
			var suid = xuid;
			var ClientName = [];
			var ClientId = [];
			var ClientUrl = [];
			var ClientUrlEnco = [];
			var famTimer = setInterval(function(){
				if(jQuery('#client_info a:eq('+totalDataEq+') input').length){
					clearInterval(famTimer);
					for(var i=0; i<totalData; i++) {
						ClientName[i] = jQuery('#client_info a:eq('+i+') input[name="c_name"]').val();
						ClientId[i] = jQuery('#client_info a:eq('+i+') input[name="c_id"]').val();
						ClientUrl[i] = jQuery('#client_info a:eq('+i+')').attr('href');
						ClientUrl[i] = ClientUrl[i]+'&abpram='+abId;
						ClientUrlEnco[i] = encodeURIComponent(ClientUrl[i]);
						console.log(i+' '+ClientName[i]);
					}
					//icon
					jQuery('#head_icon .headicon_img a img,#modal_wrapper .modal_icon a:first-child img,#content .box .video_box:eq(4) .video_box_icon img,#content .box .video_box:eq(9) .video_box_icon img,#content .box .video_box:eq(14) .video_box_icon img,#banner_area .banner_area_icon a img').attr('src', iconPath+ClientId[0]+'/icon.png');
					jQuery('#content .box .video_box:eq(0) .video_box_icon img,#content .box .video_box:eq(5) .video_box_icon img,#content .box .video_box:eq(10) .video_box_icon img').attr('src', iconPath+ClientId[1]+'/icon.png');
					jQuery('#content .box .video_box:eq(1) .video_box_icon img,#content .box .video_box:eq(6) .video_box_icon img,#content .box .video_box:eq(11) .video_box_icon img').attr('src', iconPath+ClientId[2]+'/icon.png');
					jQuery('#content .box .video_box:eq(2) .video_box_icon img,#content .box .video_box:eq(7) .video_box_icon img,#content .box .video_box:eq(12) .video_box_icon img').attr('src', iconPath+ClientId[3]+'/icon.png');
					jQuery('#content .box .video_box:eq(3) .video_box_icon img,#content .box .video_box:eq(8) .video_box_icon img,#content .box .video_box:eq(13) .video_box_icon img').attr('src', iconPath+ClientId[4]+'/icon.png');
					//name
					jQuery('#header .top_name .app_name,#head_icon .headicon_txt .app_name,#modal_wrapper .modal_icon p,#content .box .video_box:eq(4) .user_name .user_cliname,#content .box .video_box:eq(9) .user_name .user_cliname,#content .box .video_box:eq(14) .user_name .user_cliname,#banner_area .banner_area_icon a span').text(ClientName[0]);
					jQuery('#content .box .video_box:eq(0) .user_name .user_cliname,#content .box .video_box:eq(5) .user_name .user_cliname,#content .box .video_box:eq(10) .user_name .user_cliname').text(ClientName[1]);
					jQuery('#content .box .video_box:eq(1) .user_name .user_cliname,#content .box .video_box:eq(6) .user_name .user_cliname,#content .box .video_box:eq(11) .user_name .user_cliname').text(ClientName[2]);
					jQuery('#content .box .video_box:eq(2) .user_name .user_cliname,#content .box .video_box:eq(7) .user_name .user_cliname,#content .box .video_box:eq(12) .user_name .user_cliname').text(ClientName[3]);
					jQuery('#content .box .video_box:eq(3) .user_name .user_cliname,#content .box .video_box:eq(8) .user_name .user_cliname,#content .box .video_box:eq(13) .user_name .user_cliname').text(ClientName[4]);
					//url
					jQuery('#wrapper a,#modal_wrapper a').not('#anc').attr('href', 'rd.php?suid='+suid+'&rd='+ClientUrlEnco[0]);
					//bback(2番目のクライアント表示)
					//jQuery('#bback .bback_bar a img').attr('src', iconPath+ClientId[1]+'/icon.png');
					//jQuery('#bback a').attr('href', 'rd.php?suid='+suid+'&rd='+ClientUrlEnco[1]);
					/*----------modal----------*/
					if(ptNum == "1"){
						jQuery('#header .top_imgarea .top_img,#content .video_box,#icon_list li.rank').on('click',function(){
							var boxNum = jQuery('#content .video_box').index(this);
							console.log('boxNum = '+boxNum);
							if(boxNum == 4 || boxNum == 9 || boxNum == 14){
								var modalNum = 0;
							}else if(boxNum == 0 || boxNum == 5 || boxNum == 10){
								var modalNum = 1;
							}else if(boxNum == 1 || boxNum == 6 || boxNum == 11){
								var modalNum = 2;
							}else if(boxNum == 2 || boxNum == 7 || boxNum == 12){
								var modalNum = 3;
							}else if(boxNum == 3 || boxNum == 8 || boxNum == 13){
								var modalNum = 4;
							}else{
								var modalNum = 0;
							}
							//modal icon
							jQuery('#modal_wrapper .modal_icon a:first-child img').attr('src', iconPath+ClientId[modalNum]+'/icon.png');
							//modal name
							jQuery('#modal_wrapper .modal_icon p').text(ClientName[modalNum]);
							//modal url
							jQuery('#modal_wrapper a').attr('href', 'rd.php?suid='+suid+'&rd='+ClientUrlEnco[modalNum]);
							
							jQuery('#modal_screen').css('display','block');
							jQuery('#modal_wrapper').css('display','block').animate({opacity: '1'},700);
						});
						jQuery('.modal_clbtn').on('click',function(){
							jQuery('#modal_screen,#modal_wrapper').hide();
						});
					}
				}else{
					famCounter = famCounter + 1;
					if(famCounter == 100){clearInterval(famTimer);console.log('timeout');}
				}
			},100);
		}else{
			//通常（モーダル）
			if(ptNum == "1"){
				jQuery('#header .top_imgarea .top_img,.video_box,#icon_list li.rank').on('click',function(){
					jQuery('#modal_screen').css('display','block');
					jQuery('#modal_wrapper').css('display','block').animate({opacity: '1'},700);
				});
				jQuery('.modal_clbtn').on('click',function(){
					jQuery('#modal_screen,#modal_wrapper').hide();
				});
			}
		}
	});
	/*--------------------↑ (window).load(function ↑--------------------*/
	/*----------背景スクロール禁止,解除----------*/
	function no_scroll() {
		document.addEventListener("mousewheel", scroll_control, { passive: false });
		document.addEventListener("touchmove", scroll_control, { passive: false });
	}
	function return_scroll() {
		document.removeEventListener("mousewheel", scroll_control, { passive: false });
		document.removeEventListener("touchmove", scroll_control, { passive: false });
	}
	function scroll_control(event) {
		event.preventDefault();
	}
	/*--------------------↓ スクロール ↓--------------------*/
	var scrChange = 0;
	jQuery(window).scroll(function() {
		if(scrChange == 0){
			var ChangePoint = jQuery('[class*=change_point]').offset().top;
			var scrPoint = window.innerHeight + jQuery(window).scrollTop();
			if ((ChangePoint - scrPoint) / ChangePoint <= 0.05) {
				jQuery('#content .video_box .movie_change').each(function() {
					if(osNum == "0" || adrNum == "1"){
						var videoImgJ003 = jQuery(this).attr('src');
						var videoImgG003 = videoImgJ003.replace('jpg' , 'gif');
						var videoImgM003 = videoImgJ003.replace('jpg' , 'mp4');
						jQuery(this).parent('div').html('<video preload="auto" width="100%" height="auto" poster="'+videoImgJ003+'" loop muted pause playsinline><source src="'+videoImgM003+'"><source src="'+videoImgG003+'"></video>');
						scrChange = 1;
					}else{
						jQuery(this).parent('div').attr('src',videoImgG003);
						scrChange = 1;
					}
				});
			}
		}
		/*----------LP内動画遅延処理（2枚目以降）/動画再生制御----------*/
		var videoTopArray = [];
		var videoBottomArray = [];
		jQuery('#content .video_box .video_thumb').each(function(){
			var videoTop = jQuery(this).offset().top;
			var videoBottom = videoTop + jQuery(this).outerHeight();
			videoTopArray.push(videoTop);
			videoBottomArray.push(videoBottom);
		});
		//console.log('videoTopArray = '+videoTopArray);
		//console.log('videoBottomArray = '+videoBottomArray);
		if(scrChange == 1){
			//再生エリア位置
			var videoPlayPosAreaT = jQuery('[id*=video_screen]').offset().top;
			//console.log('videoPlayPosAreaT = '+videoPlayPosAreaT);
			var videoPlayPosAreaB = videoPlayPosAreaT + jQuery('[id*=video_screen]').outerHeight();
			//console.log('videoPlayPosAreaB = '+videoPlayPosAreaB);
			//再生エリア範囲内動画再生
			jQuery("#content .video_box video").each(function (i) {
				if((videoPlayPosAreaB > videoTopArray[i]) && (videoPlayPosAreaT < videoBottomArray[i])) {
					jQuery("#content .video_box video").get(i).play();
				}else{
					jQuery("#content .video_box video").get(i).pause();
				}
			});
		}
	});
	/*--------------------↑ スクロール ↑--------------------*/
	/*----------head_icon----------*/
	//head_iconの高さ(padding分足す)
	var headIconH = jQuery('#head_icon').height()+15;
	//console.log('headIconH = '+headIconH);
	//head_iconの位置取得
	var headIconPos = jQuery('[id*=head_icon]').offset().top;
	//console.log('headIconPos = '+headIconPos);
	jQuery(window).scroll(function() {
		var scrT = jQuery(window).scrollTop();
		//console.log('scrollTop = '+scrT);
		if(scrT > headIconPos) {
			jQuery('#head_icon').addClass('fixed');
			jQuery('#header').css('padding-bottom',headIconH+'px');
		}else{
			jQuery('#head_icon').removeClass('fixed');
			jQuery('#header').css('padding-bottom','0');
		}
	});
});