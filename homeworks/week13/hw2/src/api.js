import $ from 'jquery'

export function getComments(url) {
	return $.ajax({
	  url: url,
	})
}
export function getNewComments(apiURL, newCommentData, cb) {
	$.ajax({
		type: 'POST',
		url: `${apiURL}/api_add_comments.php`,
		data: newCommentData
	}).done(function(data){
		cb(data)
	})
}
