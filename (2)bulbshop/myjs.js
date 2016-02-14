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

var reg=/[^//]\w{0,100}.jpg$/;
//活动区点击左侧缩略图右侧对应出现大图
var thumb=document.getElementById("thumbnail").children;
var actSrc=document.getElementById("active").src;
var actIcon=document.getElementById("activeIcon");
thumb[0].onclick=function(){
		actSrc="imgs/"+thumb[0].src.match(reg);
		actIcon.style.cssText="margin-top:120px";
	}
thumb[1].onclick=function(){
		actSrc="imgs/"+thumb[1].src.match(reg);
		actIcon.style.cssText="margin-top:230px";
	}

//生活特权点击上下切换图片
var privilege=document.getElementById("privilege").children;
var priIcon=document.getElementById("icon-active-privilege");
//for(var i=0;i<privilege.length;i++){
	privilege[0].onclick=function(){
		document.getElementById("privilegepic").src="imgs/"+privilege[0].src.match(reg);
		priIcon.style.cssText="margin-top:-350px";
		}
	privilege[1].onclick=function(){
		document.getElementById("privilegepic").src="imgs/"+privilege[1].src.match(reg);
		priIcon.style.cssText="margin-top:-210px";
		}
	privilege[2].onclick=function(){
		document.getElementById("privilegepic").src="imgs/"+privilege[2].src.match(reg);
		priIcon.style.cssText="margin-top:-80px";
		}
//	}
var btnUp=document.getElementById("up");
var btnDown=document.getElementById("down");
btnUp.onclick=function(){
	var flag=0;
	for(var i=0;i<privilege.length;i++){
		if(document.getElementById("privilegepic").src==privilege[i].src){
			flag=i;
		}
	}
	if(flag==0){
		document.getElementById("privilegepic").src="imgs/"+privilege[2].src.match(reg);
		priIcon.style.cssText="margin-top:-80px";
	}else if(flag==1){
		document.getElementById("privilegepic").src="imgs/"+privilege[0].src.match(reg);
		priIcon.style.cssText="margin-top:-350px";
	}else if(flag==2){
		document.getElementById("privilegepic").src="imgs/"+privilege[1].src.match(reg);
		priIcon.style.cssText="margin-top:-210px";
	}
}
btnDown.onclick=function(){
	var flag=0;
	for(var i=0;i<privilege.length;i++){
		if(document.getElementById("privilegepic").src==privilege[i].src){
			flag=i;
		}
	}
	if(flag==0){
		document.getElementById("privilegepic").src="imgs/"+privilege[1].src.match(reg);
		priIcon.style.cssText="margin-top:-210px";
	}else if(flag==1){
		document.getElementById("privilegepic").src="imgs/"+privilege[2].src.match(reg);
		priIcon.style.cssText="margin-top:-80px";
		
	}else if(flag==2){
		document.getElementById("privilegepic").src="imgs/"+privilege[0].src.match(reg);
		priIcon.style.cssText="margin-top:-350px";
	}
}