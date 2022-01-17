import NavScroll from './scroll.js'
import DOMElements from './DOMElements.js'
import Slider from './slider.js'
import PageNav from './pageNav.js'

const init = () => {
    const slider = new Slider(
        DOMElements.slider,
        DOMElements.next,
        DOMElements.prev,
        DOMElements.slides,
        window.innerWidth
    )
    const navScroll = new NavScroll(250)
    const pageNav = new PageNav(DOMElements.navList, DOMElements.hamburgerBtn, DOMElements.sections, DOMElements.closeHamburger)

    slider.init()
    navScroll.init()
    pageNav.init()
}

init()