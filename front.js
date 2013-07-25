var open = false;
var max = 140;
var count = 0;

$(document).on("keypress", function(e) {

	if (e.ctrlKey && e.charCode == 2 && !open) {
		Add();
	}


	if (open && e.keyCode != 27 || open && e.keyCode != 13) {
		if (count < max) {
			count = $('#TweetGrej-input').val().length
			$('#TweetGrej-count').html(count);
		} else {
			return false;
		}
	}
});

$(document).keyup(function(e) {
	if (event.keyCode == 8 || event.keyCode == 46) {
		count = $('#TweetGrej-input').val().length;
		$('#TweetGrej-count').html(count);
	}

	if (e.keyCode == 13 && open && e.ctrlKey) {
		Save();
	}

	if (e.keyCode == 27 && open) {
		Remove();
	}
});

function Add() {
	open = true;
	$("body").prepend('<div id="TweetGrej-blog"><div id="TweetGrej-title">TweetGrej</div><textarea type="text" placeholder="Message.." id="TweetGrej-input" /><div id="TweetGrej-count"></div></div>');
	$("body").prepend('<div id="TweetGrej-overlay"></div>');
	$('#TweetGrej-input').focus();
	$('#TweetGrej-input').val(document.URL +' ');
	$('#TweetGrej-blog').on('focusout', function() {
		Remove();
	});
}

function Remove() {
	$('#TweetGrej-overlay').remove();
	$('#TweetGrej-blog').remove();
	open = false;
	count = 0;
}

function Save() {
	var data = {
		msg : JSON.stringify( $('#TweetGrej-input').val())

	}
	var serverURL = 'ENTER YOUR SERVER HERE!'

	$.post(serverURL, data , function(e){
		console.log(e);
	}).always(function(e) { 
		Remove(); 
	});


	
}