import "./dist/feather.js";
import "./src/components/Mobile-Detect.js";

feather.replace();

// detect device user with user.navigator
const windowWidth = window.innerWidth;
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer-app");

if (windowWidth > 430) {
    header.classList.add("uhelewihjnrjn93023nkdma");
    main.classList.add("fokuoidsjfnkjreo8ri0psdsdfj");
    footer.classList.add("qwueon048dnsdjf0wej");
} else {
    header.classList.remove("uhelewihjnrjn93023nkdma");
    main.classList.remove("fokuoidsjfnkjreo8ri0psdsdfj");
    footer.classList.remove("qwueon048dnsdjf0wej");
}
