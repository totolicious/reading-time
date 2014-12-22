(function(root) {
	/**
	 * [exports description]
	 * @param  {string} text The text for which you want to estimate the reading time.
	 * @param  {number} [wpm] The preferred words per minute. Default is 180.
	 * @param  {number} [minimumDelay] Specifies a minimum delay for the timer. Default is 2000.
	 * @return {number} Number of seconds required for the user to focus attention and read the text.
	 */
	root.readingTime = function(text, wpm, minimumDelay) {
		if (minimumDelay === undefined) {
			minimumDelay = 2000;
		}

		if (!text || !text.length) {
			return minimumDelay;
		}

		if (wpm === undefined) {
			wpm = 180;
		}

		return Math.max(2000, Math.round(text.replace('.,;\'\"', ' ').match(/\S+/g).length * 60000 / wpm, 2));
	};

//pass either module.exports or window as the root object
})(typeof module !== 'undefined' ? module.exports : window);