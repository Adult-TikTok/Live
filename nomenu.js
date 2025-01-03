function myNoMenu(){
event.cancelBubble = true
event.returnValue = false;
return false;
}
function myEventFx(myEvent){
if(myEvent.button && myEvent.button == 2){
alert("当サイトのテキスト及び画像、それに伴う全ての無断転載は禁止いたします。発見した場合は法的処置も視野にいれております。絶対に無断転載はお止めください。");
return false;
}
}
function myEventIE(){
if(event.button == 2){
myNoMenu();
alert("当サイトのテキスト及び画像、それに伴う全ての無断転載は禁止いたします。発見した場合は法的処置も視野にいれております。絶対に無断転載はお止めください。");
return false;
}
}
function myEventNN(myEvent){ // N4
if(myEvent.which == 3){
alert("当サイトのテキスト及び画像、それに伴う全ての無断転載は禁止いたします。発見した場合は法的処置も視野にいれております。絶対に無断転載はお止めください。");
return false;
}
}

if(document.getElementById){
if(window.opera){
window.addEventListener("mousedown",myEventFx,true);
}
else if(window.addEventListener){
document.oncontextmenu = myEventFx;
}
else if(document.all){
document.oncontextmenu = myNoMenu;
document.onmousedown = myEventIE ;
}
else if(document.layers){
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown = myEventNN ;
}
}