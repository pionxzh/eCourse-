import Vue from 'vue'
// import Vuex from 'vuex'

import App from './Layout'
// import store from './store'
import router from './router'
// import Vuetify from 'vuetify'
import {
    Vuetify,
    VApp,
    VAvatar,
    VBtn,
    VBadge,
    VBottomNav,
    VCard,
    VDialog,
    VDivider,
    VGrid,
    VImg,
    VIcon,
    VJumbotron,
    VList,
    VMenu,
    VSubheader,
    VSnackbar,
    VSwitch,
    VToolbar,
    VTooltip,
    VTextarea,
    VTextField,
    VNavigationDrawer,
    transitions
} from 'vuetify'
import { Scroll, Ripple } from 'vuetify/es5/directives'

// Vue.config.devtools = true
// Vue.config.performance = true
Vue.config.productionTip = false

// Vue.use(Vuex)
// Vue.use(Vuetify)
Vue.use(Vuetify, {
    components: {
        VApp,
        VAvatar,
        VBtn,
        VBadge,
        VBottomNav,
        VCard,
        VDialog,
        VDivider,
        VGrid,
        VImg,
        VIcon,
        VJumbotron,
        VList,
        VMenu,
        VSubheader,
        VSnackbar,
        VSwitch,
        VToolbar,
        VTooltip,
        VTextarea,
        VTextField,
        VNavigationDrawer,
        transitions
    },
    directives: {
        Ripple,
        Scroll
    }
})

new Vue({
    el: '#app',
    router,
    // store,
    render: create => create(App)
})
