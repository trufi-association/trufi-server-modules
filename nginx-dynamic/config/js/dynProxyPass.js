function proxy_pass(r) {
	let url = r.uri;
	let re_extract = new RegExp("/(.+?)/(.+?)($|/)");
	
	if (re_extract.test(url)) {
		let protocol = url.split("//")[0];
		let extname = url.replace(re_extract, "$2");
		// extract the path by removing the (virtual) domain part
		// http(s)//api.trufi.app/tileserver/styles --> styles
		let extpath = url.replace(protocol + "//" + url.replace(re_extract, "$1") + "/" + extname, "");
		
		let backendUrl = "http://" + extname + "/" + extpath ;
		r.warn("Translated '" + url + "' --> '" + backendUrl + "'");
		return backendUrl ;
	} else {
		r.error("Cannot translate '" + url + "' to an internal one")
		r.return(500, "Cannot route malformed url '" + url + "' internally")
	}
}

export default {proxy_pass}; 
