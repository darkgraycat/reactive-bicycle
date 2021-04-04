import Element from './element.js'

export default class Block extends Element {
	constructor() {
		super()
		console.log('this is my block')
	}

	print() {
		console.log('hello world')
	}
}