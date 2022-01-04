import DOMElements from "./DOMElements.js"

export default class NavScroll {
    constructor() {
        this.currentScroll = 0
        this.prevScroll = 0
    }

    _handleScroll() {
        this.currentScroll = window.scrollY

        if (this.currentScroll > this.prevScroll) {
            DOMElements.navBar.classList.add('hide')
        } else {
            DOMElements.navBar.classList.remove('hide')
        }

        this.prevScroll = this.currentScroll
    }

    _addEventListeners() {
        window.addEventListener('scroll', this._handleScroll)
    }

    init() {
        this._addEventListeners()
    }
}