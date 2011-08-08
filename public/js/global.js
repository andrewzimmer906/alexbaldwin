var auto_rotate_slides = true,
	slide_speed = 5000;
// Change to false if you don't want the slides to rotate on their own.

$("header nav a").tipTip({edgeOffset: 6, delay: 200});

$("#shots li a").tipTip({edgeOffset: 0, delay: 200, defaultPosition: "top"}).click(function(){
	var ind = $(this).index("#shots li a");
	$("#carousel ul").animate({"margin-left": "-"+ind*985});
	if(auto_rotate_slides){
		clearTimeout(rotate);
		x = ind;
		rotate = setTimeout("slides()",slide_speed);
	}
	$("#shots li a").removeClass("active");
	$(this).addClass("active");
	return false;
});
	
if(auto_rotate_slides){
	var total_links = $("#shots li a").length,
		x = 0,
		rotate = setTimeout("slides()",slide_speed);
	function slides(){
		x++;
		if(x >= total_links){ x = 0 }
		$("#shots li a:eq("+x+")").click();
	}
}