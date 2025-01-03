$(function(){
	//botton制御
	var flg = true;
	
	$('#submit_btn').click(function(){
		if(flg == true){
			sendComment();
			flg = false;
		}else{
			return false;
		}
	});
		
	function sendComment(){
		
		var weeks = new Array('日', '月', '火', '水', '木', '金', '土');
		var today = new Date();
	 
		// 年月日・曜日・時分秒の取得
		var month  = today.getMonth() + 1;
		var day    = today.getDate();
		var week   = weeks[ today.getDay() ];
		var hour   = today.getHours();
		var minute = today.getMinutes();
		var second = today.getSeconds();
	 
		// 1桁を2桁に変換する
		if (month < 10) {month = '0' + month;}
		if (day < 10) {day = '0' + day;}
		if (hour < 10) {hour = '0' + hour;}
		if (minute < 10) {minute = '0' + minute;}
		if (second < 10) {second = '0' + second;}
	 
		// 整形して返却
		var nowTime = today.getFullYear() + '年' + month + '月' + day + '日 ' + hour + ':' + minute;
		
		
		var escapeHTML = function(val) {
			return $('<div />').text(val).html();
		};
	
			
		var nick_name;
		var nickval;
		if (!$('input[name=nick]').val()){
			nick_name = commentName;
		}else{
			//エスケープ
			nickval = $('input[name=nick]').val();
			nick_name = escapeHTML(nickval);
		}
		
		var c_txt;
		var ctxtval;
		if (!$('textarea[name=c_txt]').val()){
			$('#c_form #send_txt #ok').hide();
			$('#c_form #send_txt #no').fadeIn(1000).delay(2000).fadeOut(2000);
			setTimeout(function(){
				flg = true;
			},4000);
		}else{
			//エスケープ
			ctxtval = $('textarea[name=c_txt]').val();
			c_txt = escapeHTML(ctxtval);
			//改行処理
			c_txt = c_txt.replace(/\r\n/g, "<br />");
			c_txt = c_txt.replace(/(\n|\r)/g, "<br />");
			getComment();
		}

		function getComment(){	
			commentNum++;
			$('#comment_list').append('<p>'+ commentNum +'. '+ nick_name +'<br /><span>'+ c_txt +'</span><br />'+ nowTime +'</p>');
			$('#comment_list2').append('<p>['+ commentNum +']'+ nick_name +'<br /><span>'+ c_txt +'</span><br />'+ nowTime +'</p>');
			$('.comment_btn a').text(commentNum);
			//コメント付きリンク用
			$('.comment_btn2 a').text('コメント('+commentNum+')');
			endComment();
		}
		
		function endComment(){
			$('textarea[name=c_txt]').val('');
			$('input[name=nick]').val(commentName);
			$('#c_form #send_txt #no').hide();
			$('#c_form #send_txt #ok').fadeIn(1000).delay(2000).fadeOut(2000);
			setTimeout(function(){
				flg = true;
			},4000);
		}
	};
	
});