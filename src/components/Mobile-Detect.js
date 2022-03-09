class MobileDetect extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = `
        <link rel="stylesheet" href="/src/tailwind/style.css" />
        
        <div class="mobile-detect">
            <div class="text-center">
                <ion-icon name="phone-portrait-outline" class="text-white w-[50px] h-[50px] mb-5"></ion-icon>
                <h1 class="text-white text-lg capitalize">please! use mobile phone</h1>
            </div>
        </div>
        `;
    }
}

customElements.define("mobile-detect", MobileDetect);
