import evalScript from '../lib'

describe('test',() => {
	it('works',() => {
		console.log(evalScript(''))
		console.log("success")
		throw error("fail")
	})
})