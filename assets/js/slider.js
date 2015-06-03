/**
 * Created by Emre Köse on 04.06.2015.
 */
$(function(){
	var toplamLi = $(".slider ul li").length;
	var liWidth = 1349;
	var toplamWidth = liWidth * toplamLi;
	var LiDeger = 0;
	$(".slider ul").css("width",toplamWidth+"px");


	/*Otomatik dönme*/
	$.slider = function(){
		if(LiDeger < toplamLi - 1){
			LiDeger++;
			var yeniWidth = liWidth * LiDeger;
			$(".slider ul").animate({marginLeft: "-" +yeniWidth +"px" },500);
		}else {
			LiDeger = 0;
			$(".slider ul").animate({marginLeft: "0" },500);
		}
	}

	var dondur = setInterval("$.slider()",4000);
});