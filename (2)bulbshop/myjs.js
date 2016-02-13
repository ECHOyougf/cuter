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