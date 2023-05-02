function isCompatible() {
	try {

		if (!('fetch' in window)) return false;
		if (!('Promise' in window)) return false;
		if (!('FormData' in window)) return false;
		if (!('DOMParser' in window)) return false;
		if (!('CustomEvent' in window)) return false;

		return true;
	} catch(error) {
		console.error(error);
		return false;
	}
}

if (!( 'prodify' in window )) {
	
	if (isCompatible()) {
	
    const event = new CustomEvent('prodifyInit');
		document.body.dispatchEvent(event);
	} else {
		console.warn('Prodify is not supported by this browser');
		document.body.className += ' js-prodify-not-compatible';
	}
}