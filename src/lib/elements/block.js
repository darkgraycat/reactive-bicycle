import Element from './element.js'

export default class Block extends Element {
	constructor(color, text) {
		super('400px', '400px', color, text)
	}

	print() {
		console.log('hello world')
	}
}