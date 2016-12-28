const createScript = (url, options) => {
	const defaultOptions = {
		type:'text/javascript',
		charset:'utf8',
		async:true
	}

	const script = document.createElement("script")

	options = {...defaultOptions, ...options}

	for (let option in options) {
		if (Object.prototype.hasOwnProperty.call(options, option)) {
		  script.setAttribute(option, options[option]);
		}
	}

	script.src = url
	return script
}


const noop = () => {}

const mountScript = script => {
	const head =  document.head || document.getElementsByTagName('head')[0]
	head.appendChild(script);
	head.removeChild(script);
}

const evalScript = (url = '', options = {}, cb = noop) => {
	return new Promise((resolve,reject) => {
			if('' === url) { reject('URL is empty') }
			let script = createScript(url, options)
			if (script.readyState) {
				script.onreadystatechange = () => {
				  if (script.readyState != 'complete' && script.readyState != 'loaded') return
				  script.onreadystatechange = null
				  cb()
				  resolve(script)
				}
			} else {
				script.onload = () => {
					cb()
					resolve(script)
				}
			}

			script.onerror = () => {
				reject('script failed to load')
			}

			mountScript(script)
	})
}

export default evalScript