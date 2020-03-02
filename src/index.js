// YOUR_THEME_NPM_NAME - your NPM package name. ex. @vuefront/wordpress-theme 

import * as components from './components'

export default {
    css: {
        main: 'YOUR_THEME_NPM_NAME/assets/css/main.scss'
    },
    atoms: {
        // add your atoms here. ex:
        // Button: components.aButton
    },
    molecules: {
        // add your molecules here. ex:
        //CartLink: components.mCartLink
    },
    organisms: {
        // add your organisms here. ex:
        //Header: components.oHeader
    }
}