//轮播图
var oPic=document.getElementById("carousel").children;
var oIndex=document.getElementById("indexs").children;
var timer=null;
function changeBanner(i){
		oPic[i].className="show";
		oIndex[i].className="change-indexColor";
		for(j=0;j<oIndex.length;j++){
			if(j!=i){
				oPic[j].className="hide";
				oIndex[j].className="index";
			}
		}
	}

autoChangeBanner();
timer=setInterval("autoChangeBanner()","12000");
function autoChangeBanner(){
	setTimeout("changeBanner(0)","0");
	setTimeout("changeBanner(1)","3000");
	setTimeout("changeBanner(2)","6000");
	setTimeout("changeBanner(3)","9000");
}

//会员中心下拉菜单
var select=document.getElementById("select");
select.onclick=function(){
	var option=document.getElementById("option").className;
	if(option=="optionshow")
		document.getElementById("option").className="optionhide";
	else document.getElementById("option").className="optionshow";

}

//点击左侧缩略图右侧对应出现大图
var thumb=document.getElementById("thumbnail").children;
for(var i=0;i<thumb.length;i++){
	thumb[i].onclick=function(){
		
	}
}