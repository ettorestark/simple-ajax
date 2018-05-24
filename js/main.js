(function(window, document) {
	function httpRequest(element, method, url) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if(this.readyState == 4 && this.status == 200) {
				document.getElementById(element).innerHTML = this.responseText;
			}
		};
		xhttp.open(method, url, true);
		xhttp.send();
	}

	document.getElementById('showText').addEventListener('click', function() {
		httpRequest('show', 'POST', 'text.txt');
	});
})(window, document);