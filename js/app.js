import NavScroll from './scroll.js'
import DOMElements from './DOMElements.js'
import Slider from './slider.js'

const init = () => {
    const slider = new Slider(
        DOMElements.slider,
        DOMElements.next,
        DOMElements.prev,
        DOMElements.slides,
        window.innerWidth
    )
    const navScroll = new NavScroll()

    slider.init()
    navScroll.init()
}

init()