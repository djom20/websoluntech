// $( "form#contact" ).on( "submit", function( event ) {

// 	event.preventDefault();

// 	$('#response').empty();

// 	var data = {
// 		action: 'submit_form',
// 		data: $( this ).serialize()
// 	};

// 	console.log(data);
// 	console.log(ajaxurl);

// 	$.post(ajaxurl, data, function(response) {
// 		console.log(response);
// 		if(response.success){
// 			$('#response').append(response.success);
// 		}
// 		if(response.name){
// 			$('#response').append(response.name + "<br>");
// 		}
// 		if(response.email){
// 			$('#response').append(response.email + "<br>");
// 		}
// 		if(response.message){
// 			$('#response').append(response.message + "<br>");
// 		}
// 		if(response.subject){
// 			$('#response').append(response.subject + "<br>");
// 		}
// 	},'json');

// });
