# Vuefront Theme Kit

Build your own VueFront theme today. It's easy.

> this instructions is made for devleoping a publicly accessible VueFront theme aka FREE THEME

## Quick Start
1. Setup VS Code development environment 
3. Develop
4. Publish

### 1. Setup VS Code development environment 
Use VS Code. To make things easier, we recommend using VS Code for rapid development. 

Name your theme in the following pattern: 
```
    # vuefront-[themename]-theme
    vuefront-myvuefront-theme

    # or vuefront-my-vuefront-theme
```

#### Step 1: Clone this repo into a folder that is named according to your theme name `[themename]-theme`

```
    └── myvuefront-theme
```
#### Step 2: Run Command
```
    yarn install
```
#### Step 3: Inside the cloned repo you will find the following files that need to be edited: 

1. `.vscode/tasks.json` - will add task to your VS Code. We recommend installing a VS Code plugin `tasks` to see these tasks in the status bar for ease of access.
2. `package.json`
3. `index.js`

You will need to edit these veriables

`YOUR_THEME_NAME` - your theme name. ex. `myvuefront`
`YOUR_VUEFRONT_WEBAPP_TEST_FOLDER` - your vuefront web app test folder in VSCODE Workspace. ex. `myvuefront-theme-test`
`YOUR_THEME_NPM_NAME` - your NPM package name. ex. `vuefront-myvuefront-theme`

#### Step 4: Publish your Theme to NPM
To make your theme installible via NPM (or Yarn) you will need to publish the inistal version of 0.1.0 under your NPM username

```
    # 1. Log in NPM
    npm login 

    # 2. Publish (when publishing first time)
    npm publish --access public
```

#### Step 5: Add VueFront Web App folder to your VS Code Workspace 
To start developing your theme, you will first need to install VueFront Web App. 

1. Create a folder `[themename]-theme-test`
```
    └── myvuefront-theme
    └── myvuefront-theme-test
```
2. Install VueFront Web App
```
    # 1. Run command 
    yarn create vuefront-app

    # 2. Provide CMS Connect URL (ex. https://wordpress.vuefront.com/wp-json/vuefront/v1/graphql)
```
3. Install your theme on this App
```
    # Run Command
    yarn add vuefront-myvuefront-theme
```
4. Edit `vuefront.config.js` to specify the theme
```
    export default {
        theme: 'vuefront-myvuefront-theme'
        ...
```
5. Run command to see your theme in action
```
    yarn dev
```

#### Step 6: Run VS Code Tasks
1. Run task `Mytheme Build` - this will build your theme into the lib folder.
2. Run task `Mytheme Theme Sync` - this will start watching all changes in your `myvuefront-theme` folder and move it to `myvuefront-theme-test/node_modules/vuefront-myvuefront-theme`

> Now you can develop the theme in your `myvuefront-theme` folder and see imidiate updates on the app built from folder `myvuefront-theme-test`

### 2. Develop
Developing a theme is similar to customizing your VueFront Web App. 
1. You can customize components by creating a copy of them in your `YOUR_THEME_NAME-theme/components` and initializing them in `YOUR_THEME_NAME-theme/components/index.js`. [learn more](https://vuefront.com/develop)
2. You can add your CSS styles in `assets/css/main.scss`

### 3. Publish
Publishing is easy. Just upgrade your version in `package.json` and rund command `npm publish`
