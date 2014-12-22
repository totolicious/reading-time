// this script will display the following array elements one by one
// using the readingTime function

var readingTime = require('../index').readingTime;

[
'test test test',
'zece doi zece',
'we begin in 3, 2, 1...',
'Hello! This is a script that estimates the reading speed of a user',
'You can give it small text',
'Or rather large paragraphs like this one. The default speed is set to 180 words per minute, which means that this will be comfortable enough for users to read. You can add whatever text you want',
'The script is useful for setting automatic timeouts for popups. This lets you worry less about what timers to set.',
'You can also specify a minimum timer if you consider that a specific timer is not enough',
''
].reduce(function(previousTimeout, text) {
	//estimate the reading time of the current array element
	var readDuration = readingTime(text),
		timeoutDuration = previousTimeout + readDuration;
	setTimeout(function() {
		console.log(text);
	}, previousTimeout);
	
	return timeoutDuration;
}, 0);
