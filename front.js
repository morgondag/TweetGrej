var open = false;
var max = 140;
var count = 0;

$(document).on("keypress", function(e) {
	if (e.ctrlKey && e.charCode == 2 && !open) {
		Add();
	}

	if (open && e.keyCode != 27 || open && e.keyCode != 13) {
		if (count < max) {
			count = $('#tweetBox-input').val().length
			$('#tweetBox-count').html(count);
		} else {
			return false;
		}
	}
});

$(document).keyup(function(e) {
	if (event.keyCode == 8 || event.keyCode == 46) {
		count = $('#tweetBox-input').val().length;
		$('#tweetBox-count').html(count);
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
	$("body").prepend('<div id="tweetBox-blog"><div id="tweetBox-title">TweetGrej</div><textarea type="text" placeholder="Message.." id="tweetBox-input" /><div id="tweetBox-count"></div></div>');
	$("body").prepend('<div id="tweetBox-overlay"></div>');
	$('#tweetBox-input').focus();
	$('#tweetBox-blog').on('focusout', function() {
		Remove();
	});
}

function Remove() {
	$('#tweetBox-overlay').remove();
	$('#tweetBox-blog').remove();
	open = false;
	count = 0;
}

function Save() {
	console.log('save');
	Remove();
}