/**
 *
 * @property {ShadowRoot} root
 */
export default class Avatar extends HTMLElement  {

    #size = {
        bigSmall: 30,
        small: 50,
        medium: 75,
        big: 100
    }
    constructor() {
        super();
        this.root = this.attachShadow({mode : 'open'})
    }

    connectedCallback () {
        const src= this.getAttribute('src')
        const size = this.#size[this.getAttribute('size')] ?? this.#size.small

        this.root.innerHTML = `
            <style>
            
                :host {
                    display: block;
                    overflow: hidden;
                }
                img {
                    border-radius: 50%;
                    width: ${size}px;
                    height: ${size}px;
                    object-fit: cover;
                }
                
            </style>
            <img src="${src}" alt=""/>
        `
    }

}