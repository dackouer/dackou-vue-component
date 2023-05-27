import { App } from "vue";
import { setupAnimate } from "./animate"
import { setupElemementplus } from "./element-plus"
import { setupFontawesome } from "./font-awesome"
import { setupSwiper } from "./swiper"
import { setupTailwindcss } from "./tailwindcss"
import { setupFingerprint } from "./fingerprintjs"

export function setupPlugin(app:App){
    setupFingerprint()
    setupFontawesome()
    setupSwiper()
    setupAnimate()
    setupTailwindcss()
    setupElemementplus(app)
}