//function game(){
	var x_left=0,
		x_right=0,
		y_top=0,
		y_bottom=0;
	var img_width_max=100;
	var img_width_min=30;
	var i=0;
	function init(){
		
		document.getElementById("whole").style.display="none";
		document.body.bgColor="#000";
		x_right=window.innerWidth-img_width_max;
		y_bottom=window.innerHeight-img_width_max;
		
		
	}
	timer=setInterval("start()",1000);
	function start(){
		i++;
		var node_img=document.createElement("img");
		document.body.appendChild(node_img);
		node_img.setAttribute("src","img/pic.png");
		var width=getRandom(img_width_max,img_width_min);
		var x=getRandom(x_left,x_right);
		var y=getRandom(y_top,y_bottom);
		var str = "position:absolute; width:"+width+"px; top:"+y+"px; left:"+x+"px;";
		node_img.setAttribute("style",str);
		node_img.setAttribute("onclick","document.body.removeChild(this);i--");
		if(i>=10){
			clearInterval(timer);
			var game=document.createElement("div");
			var over=document.createTextNode("GAME OVER");
			var str4="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:600px; height:100px; line-height:100px; text-align:center; cursor:pointer;font-size:50px;background:red; color:white; font-weight:bold; border-radius:50px;"
			game.appendChild(over);
			game.setAttribute("style",str4);
			document.body.appendChild(game);
			game.onclick=function(){
				window.location.reload();
			}
		}
	}
	function getRandom(max1,min1){
				return Math.floor(Math.random()*(max1 - min1)+min1);
	}
//}
var hello= document.getElementsByClassName("hello")[0];
hello.onmouseover=function (){
	hello.innerHTML="Enjoy";
}
hello.onmouseout=function(){
	hello.innerHTML="HELLO";
}
hello.onclick=function(){
	var second=document.getElementsByClassName("second")[0];
	var str1="animation:rect 3s linear 1 alternate forwards";
	second.setAttribute("style",str1);
}
var sp=document.getElementsByClassName("secondp")[0];
sp.onclick=function(){
	var three=document.getElementsByClassName("three")[0];
	var second2=document.getElementsByClassName("second")[0];
	var str2="animation:rect2 3s linear 1 alternate forwards";
	three.style.display="block";
	second2.setAttribute("style",str2);
	setTimeout("init()",3000);
}
















