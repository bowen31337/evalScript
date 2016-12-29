import EvalScript from '../lib'

describe('test',() => {
	it('exists',() => {
		expect(EvalScript).to.exist
	})
	it('has customized property',() => {
		let result = EvalScript('http://code.jquery.com/jquery-2.2.3.js',{id:'test'})
		result.then(data => {
			expect(data).to.have.ownProperty("id")
			expect(data).to.have.ownProperty("src")
		})
	})
	it('url empty exception',() => {
		let result = EvalScript('')
		result.then().catch(error => expect(error).to.equal('URL is empty'))
	})
})
