import DOMElements from "./DOMElements.js"

export default class NavScroll {
    constructor(threshold) {
        this.currentScroll = 0
        this.prevScroll = 0
        this.threshold = threshold || 0
    }

    static scrollTo = (x, y) => {
        window.scrollTo({ left: x, top: y, behavior: 'smooth' })
    }

    _handleScrollUp = () => {
        if (this.currentScroll > this.threshold) {
            DOMElements.scrollUpButton.classList.add('show')
            DOMElements.scrollUpButton.addEventListener('click', () => NavScroll.scrollTo(0, 0))
        } else {
            DOMElements.scrollUpButton.classList.remove('show')
            DOMElements.scrollUpButton.removeEventListener('click', () => NavScroll.scrollTo(0, 0))
        }
    }

    _handleMenuState = () => {
        if (this.currentScroll > this.prevScroll && this.currentScroll > this.threshold) {
            DOMElements.navBar.classList.add('hide')
        } else {
            DOMElements.navBar.classList.remove('hide')
        }
    }

    _handleScroll = () => {
        this.currentScroll = window.scrollY

        this._handleMenuState()
        this._handleScrollUp()

        this.prevScroll = this.currentScroll
    }

    _addEventListeners() {
        window.addEventListener('scroll', this._handleScroll)
    }

    init() {
        this._addEventListeners()
    }
}