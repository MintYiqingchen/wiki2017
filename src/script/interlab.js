$("#secondnav a:first").click(function(){
	if($("#experiment").css("display")=="none"){
		$("#experiment").css("display","block");
	}
	$("#material").css("display","none");
	$("#result").css("display","none");
});

$("#a3").click(function(){
	if($("#result").css("display")=="none"){
		$("#result").css("display","block");
	}
	$("#material").css("display","none");
	$("#experiment").css("display","none");
});

$("#a2").click(function(){
	if($("#material").css("display")=="none"){
		$("#material").css("display","block");
	}
	$("#experiment").css("display","none");
	$("#result").css("display","none");
});