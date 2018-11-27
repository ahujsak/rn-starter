# rn-starter
This is a template for starting a react-native project. DO NOT fork or clone the project, you will want to start your own and use this as a template. This will ensure your packages will be for the most part up to date. 


# Getting Started
This makes some assumptions like having react-native-cli installed globally, nodejs, npm, yarn on your computer already. It is also assuming you are going to integrate with app center for builds and for some distribution.
1. Create projects in app center. 
2. create a local project on your machine by running `react-native init`
3. commit your poject as base project. 
4. If you are using vs-code as your IDE 
  - open preferences/settings
  - workspace settings
  - add ```{
    "javascript.validate.enable": false,
    "flow.useNPMPackagedFlow": true
}```
5. Copy the contents of package.json with the exception of name, version, and private.
6. adjust the package versions of `appcenter`, `appcenter-analytics`, and `appcenter-crashes` to be the same as your project in app center.
7. run rm -rf node_modules
8. yarn
9. react-native link to link the app center modules. 


Once you have done this you will be set up with some very cool packages to make your project easy to manage and code check your commits with precommit hooks run by prettier. Basically, when you have a commit, es-lint, prettier, and flow will be run in order to check your code. If there are formatting errors, you can `run npm run format` and that will clean them up. 
NOTE: if you attempt to commit now you may run into flow issues that will be fixed in the next section where we copy over some configuration files. 

# copying files from this project to set up redux and flow . 
In order to get set up quickly with an easy to understand files structure and have redux set up in your app please copy the following files from this project to yours. In some cases, you may need to open the files and just copy the content. Especially with hidden files. 
- copy flow-typed
- create .eslintrc.json and copy contents of .eslintrc.json
- copy contents of .flowconfig, and .bablerc
- delete App.js
- open index.js and change line `import App from './App'` to be `import App from './src/App'`
- copy src directory
