/*===============
javascript file
=================*/
// function send()
// {
// 	var sending = document.getElementById('plane');
// 	sending.classList.add("send");
// }

$(document).ready(function(){
	$("#plane").click(function(){
		$("#plane").addClass("send");
		$("#plane").hide(300);
		$(".work-popup").hide();
		$(".work-show").show();
		$(".porfolio").show(400);
	});
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});
