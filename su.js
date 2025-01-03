/*20191216　削除
$(window).load(function() {
	//アドレスバー
	setTimeout(function() {
		window.scrollTo(0, 1);
	},100);
});
*/

$(function(){
	$('#anc.slideup').click(function () {
		$("html,body").animate({scrollTop:0},"800");
	});
});

//android用LPcback
/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});

jQuery(function (){
	var cbackUa = navigator.userAgent;
	var cbackSite = getParam('_site');
	var cbackXuid = getParam('_xuid');
	var cbackfsc = getParam('_fsc');
	var cbackRdUrl;

	if(cbackfsc == '14'){
		cbackRdUrl = "https://fam-ad.com/ad/p/dt?_site=58381&_loc=247701&_mstype=99&suid="+cbackSite;
	}else if(cbackSite == '9'){
		//成果テスト用
		//cbackRdUrl = "https://fam-ad.com/ad/p/dt?_site=58381&_loc=259003&_mstype=99&suid="+cbackSite;
		cbackRdUrl = "https://fam-ad.com/ad/p/dt?_site=58381&_loc=192490&_mstype=99&suid="+cbackSite;
	}else if(cbackSite == '79313' || cbackSite == '79726' || cbackSite == '79986'){
		//ポルノハブ用
		cbackRdUrl = "https://fam-ad.com/ad/p/dt?_site=58381&_loc=290352&_mstype=99&suid="+cbackSite;
	}else if(cbackSite == '80005'){
		//サークア用
		cbackRdUrl = "https://fam-ad.com/ad/p/dt?_site=58381&_loc=291894&_mstype=99&suid="+cbackSite;
	}else{
		//通常
		cbackRdUrl = "https://fam-ad.com/ad/p/dt?_site=58381&_loc=192490&_mstype=99&suid="+cbackSite;
	}

	if(cbackUa.indexOf('Android') !== -1){
		var cbackTime = setInterval(function(){
			var cbackFlg = jQuery.cookie("cbackFlg");
			//クライアントバックユニーク5分
			var cbFlg = jQuery.cookie("CB_flg");
			if(!cbFlg && cbackFlg && cbackFlg == cbackXuid && cbackSite != '61187'){
				clearInterval(cbackTime);
				jQuery.removeCookie("cbackFlg");
				var cbackAcsDate = new Date();
				cbackAcsDate.setTime(cbackAcsDate.getTime() + ( 5 * 60 * 1000 ));
				//cbackAcsDate.setTime(cbackAcsDate.getTime() + ( 1 * 1000 ));
				jQuery.cookie("CB_flg",1,{expires: cbackAcsDate});
				location.href = cbackRdUrl;
			}
		},500);
	}
	
	function getParam(name, url) {
		if (!url){ url = window.location.href;}
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results){ return null;}
		if (!results[2]){ return '';}
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
});