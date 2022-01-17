import NavScroll from "./scroll.js"

export default class PageNav {
    constructor(container, btn, elementsToNavigate, closeBtn) {
        this.container = container
        this.btn = btn
        this.elementsToNavigate = elementsToNavigate
        this.list = this.container ? this.container.querySelector('ul') : null
        this.closeBtn = closeBtn
    }

    navigate = (el) => {
        NavScroll.scrollTo(0, el.offsetTop)
        this.toogleMenu()
    }

    removeLinks = () => {
        this.list.innerHTML = ''
    }

    generateLinks = () => {
        if (this.list) {
            this.elementsToNavigate.forEach((el) => {
                const li = document.createElement('li')
                const text = el.dataset.text

                li.classList.add('page-nav-item')
                li.classList.add('--header-2-text')
                li.innerText = text

                this.list.appendChild(li)

                li.addEventListener('click', () => this.navigate(el))
            })
        }
    }

    toogleMenu = () => {
        if (!this.container) return
        if (this.container.classList.contains('show')) {
            this.container.classList.remove('show')
            this.removeLinks()
        } else {
            this.container.classList.add('show')
            this.generateLinks()
        }
    }

    _addEventListeners() {
        if (this.btn)
            this.btn.addEventListener('click', this.toogleMenu)
        if (this.closeBtn)
            this.closeBtn.addEventListener('click', this.toogleMenu)
    }

    init() {
        this._addEventListeners()
    }
}