$(document).on('ready', function() {

	$('.form').hide(); 
	$('.editName').on('click', function(){
  	$(this).hide();
  	// $('.form').show();
  	$('.editName').after('<input></input>');
  	});
  	
  	$('input').keyup(function() {
    var value = $(this).val();
    });

  	$('.editLoc').on('click', function(){
  	$(this).hide();
  	// $('.form').show();
  	$('.editLoc').after('<textarea></textarea>');
  	});


  	$('.LocOk').on('click', function(){
  	$('<textarea></textarea>').val();

  	});
  
});


    
