// YOUR_THEME_NPM_NAME - your NPM package name. ex. @vuefront/wordpress-theme

module.exports = {
  root: {
    components: "YOUR_THEME_NPM_NAME/lib/components",
  },
  css: {
    theme: 'YOUR_THEME_NPM_NAME/assets/scss/theme.scss'
  },
  atoms: {
    // add your atoms here. ex:
    // Button: {
    //   component: "atoms/button/button.vue",
    //   css: "atoms/button/button.scss"
    // }
  },
  molecules: {
    // add your molecules here. ex:
    // ProductThumb: {
    //   component: "molecules/product-thumb/product-thumb.vue",
    //   css: "molecules/product-thumb/product-thumb.scss"
    // }
  },
  organisms: {
    // add your organisms here. ex:
    // Header: {
    //   component: "organisms/header/header.vue",
    //   css: "organisms/header/header.scss"
    // }
  }
}
