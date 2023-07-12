import React, {  createRef,  } from 'react'
import scrollTo  from 'scroll-to'
import '../styles/modules/ToTop.css'



class ToTop extends React.Component<any, {scrollY: number}> {
    button: any;

    constructor(props: any){
        super(props)
        this.scrollToTop = this.scrollToTop.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
        this.button = createRef()
        this.state = {
            scrollY: window.scrollY,
        }

    }

    componentDidMount(): void {
        window.addEventListener("scroll", this.handleScroll)
    }
    handleScroll() {
        if(window.scrollY > 200) {
            if(this.button.current){
                this.button.current.classList.forEach((element: string) => {
                    if(element == "visible") {
                        return;
                    }else {
                        this.button.current.classList.add("visible")
                    }
                });
            }   
        }else {
            this.button.current.classList.forEach((element: string) => {
                if(element == "visible") {
                    this.button.current.classList.remove("visible")
                }
            });
        }
    }

    scrollToTop() {
        scrollTo(0,0, {  ease: 'out-bounce',duration: 1000})
    }


    render(): React.ReactNode {
        return(
            <button className='ToTop' ref={this.button} onClick={this.scrollToTop}><span className="ToTopArrow material-symbols-outlined">expand_less</span></button>
        )
    }
}

export default ToTop