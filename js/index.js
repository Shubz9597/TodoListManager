//Completed Li
$("ul").on("click", "li", function(){
	$(this).toggleClass('completed');
});

//Now for deleting todo
$("ul").on('click', "span", function(event){
	$(this).parent().fadeOut('500', function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
	if (event.which === 13) {
	 	var text= $(this).val();
		$(this).val("");
		$("ul").append('<li><span><i class="fa fa-trash" aria-hidden="true"></span> '+text+'</li>')
	}
});

$("#tog").on('click', function() {
	$("input[type=text]").fadeToggle();
	if ($(this).hasClass('fa-times')) {
		$(this).removeClass('fa-times');
		$(this).addClass('fa-pencil');
	}
	else{
		$(this).removeClass('fa-pencil');
		$(this).addClass('fa-times');	
	}
	

});