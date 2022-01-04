export default class Slider {
    constructor(slider, nextBtn, prevBtn, slides, gapBeetwenSlides) {
        this.slider = slider
        this.nextBtn = nextBtn
        this.prevBtn = prevBtn
        this.slides = slides
        this.currentSlide = 0
        this.maxSlides = slides ? slides.length : null
        this.prevSlide = null
        this.slideMesurements = this.slider.getBoundingClientRect()
        this.gapBeetwenSlides = gapBeetwenSlides
    }

    _update = () => {
        if (this.slider) {
            this.slideMesurements = this.slider.getBoundingClientRect()
            this.gapBeetwenSlides = window.innerWidth
            this.changeSlide(this.currentSlide)
        }
    }

    _addEventListeners() {
        this.nextBtn ? this.nextBtn.addEventListener('click', () => {
            const nextSlideIndex = this.currentSlide + 1 >= this.maxSlides ? 0 : this.currentSlide + 1
            this.changeSlide(nextSlideIndex)
        }) : console.warn('next btn dosent exist')
        this.prevBtn ? this.prevBtn.addEventListener('click', () => {
            const nextSlideIndex = this.currentSlide - 1 < 0 ? this.maxSlides - 1 : this.currentSlide - 1
            this.changeSlide(nextSlideIndex)
        }) : console.warn('prev btn dosent exist')
        window.addEventListener('resize', this._update)
    }

    changeSlide(slideIndex) {
        if (!this.slideMesurements) return
        const { width } = this.slideMesurements
        const translateX = width + this.gapBeetwenSlides
            // set translate x poperty to slider
        this.currentSlide = slideIndex
        this.slider.style.transform = `translateX(${translateX * slideIndex * -1}px)`

        this.setClassNames(slideIndex)

        this.prevSlide = slideIndex
    }

    setClassNames(slideIndex) {
        if (typeof this.prevSlide === 'number') {
            this.slides[this.prevSlide].classList.remove('active')
        }

        if (this.slides[slideIndex]) {
            this.slides[slideIndex].classList.add('active')
        }
    }

    init() {
        this._addEventListeners()
            // set slides columns and gap between them
        this.slider.style.gridTemplateColumns = `repeat(${this.maxSlides}, 100%)`
        this.slider.style.gap = this.gapBeetwenSlides
        this.changeSlide(0)
    }
}