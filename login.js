$(document).ready(function () {
	$('.log-btn').click(function () {
		var password=$("#Passwod").val();
		$.ajax({
			type: "POST",
			url: "login.php",
			data: "&pas="+password,
			success: function(html){
			 if(html=='true')    {
			  window.location="index.php";
			 }
			 else 
			 {
				$('.log-status').addClass('wrong-entry');
				$('.alert').fadeIn(500);
				setTimeout("$('.alert').fadeOut(1500);", 3000);
				
			}}});
			$('.form-control').keypress(function () {
				$('.log-status').removeClass('wrong-entry');
			  });
})});
