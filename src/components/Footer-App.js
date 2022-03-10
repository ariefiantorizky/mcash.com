class FooterApp extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = `
            <link rel="stylesheet" href="./src/tailwind/style.css" />
            <link rel="stylesheet" href="/src/tailwind/style.css" />

            <footer class="w-full h-auto p-3 px-5 bg-white border-t fixed bottom-0 left-0 z-50">
                <div class="w-full h-auto grid grid-cols-5 gap-5">
                    <div class="text-center">
                        <a href="./index.html" class="opacity-40 hover:opacity-100">
                            <ion-icon class="w-[23px] h-[23px]" name="home-outline"></ion-icon>
                        </a>
                    </div>
                    <div class="text-center">
                        <a href="./public/views/riwayat/index.html" class="opacity-40 hover:opacity-100">
                            <ion-icon class="w-[23px] h-[23px]" name="receipt-outline"></ion-icon>
                        </a>
                    </div>
                    <div class="text-center relative">
                        <div
                            class="qr bg-sky-600 w-[70px] h-[70px] border-2 border-t-4 border-white rounded-full flex items-center justify-center z-40">
                            <a href="./public/views/scan-qr/index.html">
                                <ion-icon class="w-[28px] h-[28px] text-white animate-pulse" name="qr-code-outline"></ion-icon>
                            </a>
                        </div>
                    </div>
                    <div class="text-center">
                        <a href="./public/views/dompet/index.html" class="opacity-40 hover:opacity-100">
                            <ion-icon class="w-[23px] h-[23px]" name="wallet-outline"></ion-icon>
                        </a>
                    </div>
                    <div class="text-center">
                        <a href="./public/views/akun-saya/index.html" class="opacity-40 hover:opacity-100">
                            <ion-icon class="w-[23px] h-[23px]" name="person-circle-outline"></ion-icon>
                        </a>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define("footer-app", FooterApp);
