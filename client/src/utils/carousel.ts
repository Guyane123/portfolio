interface carouselOptions {
    displayedItems: number;
    slideItems: number;
}

/**
 * create a new carousel with the element and the options properties
 * @date 7/10/2023 - 9:42:10 AM
 *
 * @class carousel
 * @typedef {carousel}
 */
class carousel {
    item: HTMLElement;
    options: carouselOptions;
    children: HTMLElement[];
    ratio: number;
    height: number;
    container: HTMLDivElement;
    currentItem: number;
    displayed: number;
    slide: number;

    constructor(element: HTMLElement, options: carouselOptions) {
        this.options = options;
        this.displayed =
            window.innerWidth < 800 ? 1 : this.options.displayedItems;
        this.slide = window.innerWidth < 800 ? 1 : this.options.slideItems;
        this.item = element;
        this.children = [].slice.call(element.children);
        this.container = this.createDivWithClassName("carousel-container");

        this.ratio = this.children.length / this.displayed;
        this.height = window.innerHeight;
        this.currentItem = 0;

        this.container.style.width = this.ratio * 100 + "%";

        this.createDivWithClassName = this.createDivWithClassName.bind(this);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);

        this.get = this.get.bind(this);
        this.get();

        window.addEventListener("keyup", (e) => {
            if (e.key == "ArrowRight") {
                this.next();
            } else if (e.key == "ArrowLeft") {
                this.prev();
            }
        });
        const throttle = this.throttle(this.get, 200);
        window.addEventListener("resize", throttle);

        this.setHTML();
        this.setStyle();
    }

    /**
     * set the style for the carousel
     * @date 7/10/2023 - 10:47:04 AM
     */
    setStyle() {
        const containerChildren = [].slice.call(this.container.children);
        containerChildren.forEach((element: HTMLElement) => {
            element.style.width = 100 / this.displayed + "%";
        });
    }

    /**
     * Create a HTMLDivElement with a specified className
     * @date 7/10/2023 - 6:25:38 PM
     *
     * @param {string} className
     * @returns {HTMLDivElement}
     */
    createDivWithClassName(className: string) {
        const newElement = document.createElement("div");
        newElement.setAttribute("class", className);

        return newElement;
    }

    /**
     * create the HTML for the Carousel
     * @date 7/10/2023 - 9:42:51 AM
     */
    setHTML() {
        this.container.setAttribute("tabindex", "0");

        const carousel = this.createDivWithClassName("carousel");
        const nextArrow = this.createDivWithClassName("next-arrow");
        const prevArrow = this.createDivWithClassName("prev-arrow");
        const prevArrowSpan = document.createElement('span')
        const nextArrowSpan = document.createElement('span')
        prevArrowSpan.setAttribute("class", "material-symbols-outlined")
        nextArrowSpan.setAttribute("class", "material-symbols-outlined")
        prevArrowSpan.innerText = "chevron_left";
        nextArrowSpan.innerText = "chevron_right";
        prevArrow.appendChild(prevArrowSpan)
        nextArrow.appendChild(nextArrowSpan)
        nextArrow.addEventListener("click", this.next);
        prevArrow.addEventListener("click", this.prev);

        nextArrow.addEventListener("touchend", this.next);
        prevArrow.addEventListener("touchend", this.prev);

        carousel.appendChild(prevArrow);
        carousel.appendChild(nextArrow);

        this.item.appendChild(carousel);
        carousel.appendChild(this.container);

        this.children.forEach((element) => {
            const newItem = this.createDivWithClassName("carousel-items");
            newItem.appendChild(element);
            this.container.appendChild(newItem);
        });
    }

    /**
     * Go previous one carousel
     * @date 7/10/2023 - 2:13:03 PM
     */
    prev() {
        this.gotoItem(this.currentItem - this.slide);
    }

    /**
     * Go to next one carousel
     * @date 7/10/2023 - 2:13:22 PM
     */
    next() {
        this.gotoItem(this.currentItem + this.slide);
    }

    /**
     * Go to the item
     * @date 7/10/2023 - 2:13:46 PM
     *
     * @param {number} index
     */
    gotoItem(index: number) {
        if (index < 0) {
            index = this.children.length - this.slide;
        } else if (index >= this.children.length) {
            index = 0;
        }
        const translateX = (index * -100) / this.children.length;
        this.container.style.transform =
            "translate3d(" + translateX + "%, 0, 0)";
        this.currentItem = index;
    }

    /**
     * throttle to optimize resizing
     * @date 7/11/2023 - 11:10:06 AM
     *
     * @param {() => void} cb
     * @param {number} delay
     * @returns {void, delay: number) => () => void}
     */
    throttle(cb: () => void, delay: number) {
        let wait = false;

        return () => {
            if (wait) {
                return;
            }

            cb();
            wait = true;
            setTimeout(() => {
                wait = false;
            }, delay);
        };
    }

    /**
     * Make the carousel responsive
     * @date 7/11/2023 - 11:09:52 AM
     */
    get() {
        this.displayed =
            window.innerWidth < 1000 ? 1 : this.options.displayedItems;
        this.slide = window.innerWidth < 1000 ? 1 : this.options.slideItems;
        this.ratio = this.children.length / this.displayed;
        this.container.style.width = this.ratio * 100 + "%";
        const containerChildren = [].slice.call(this.container.children);
        containerChildren.forEach((element: HTMLElement) => {
            element.style.width = 100 / this.displayed + "%";
        });
    }
}

export default carousel;
