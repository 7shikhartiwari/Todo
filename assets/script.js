$("ul").on("click",".del",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
	
});

$("ul").on("click",".strike",function(event){
	$(this).parent().toggleClass("strikeThrough");
	$(this).parent().children("span").toggleClass("changes");
	event.stopPropagation();
	
});

$("button").click(function(){
	var text=$("input").val();
	$("ul").append('<li><span class="del"><i class="fas fa-trash"></i></span><span class="strike"><i class="fas fa-strikethrough"></i></span> '+text+'</li>');
	$("input").val("");
});

$("ul").on("click","li",function(event){
	$(this).children("span").toggleClass("changes");
	event.stopPropagation();
	
});

