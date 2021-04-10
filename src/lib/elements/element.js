export default class Element {
	constructor(width, height, color, html) {
		this.node = document.createElement('div')
		this.width = width
		this.height = height
		this.color = color
		this.html = html
		this._update()
	}

	add(element) {
		element.node.appendChild(element)
		this._update()

	}

	append(element) {
		element.add(this.node)
		this._update()
	}

	_update() {
		this.node.style.width = this.width
		this.node.style.height = this.height
		this.node.style.backgroundColor = this.color
		this.node.innerHTML = this.html
	}
}