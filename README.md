## Vue Starter

A Vue JS template used to create apps and custom websites. The template is based on Vue JS official [Webpack Boilerplate](https://github.com/vuejs-templates/webpack). I've added my standard project structure and some helpful webpack configurations.

## Features
Features I've added that don't come loaded in the standard webpack template.

- Sass and sass resource loader. Enables using sass throughout the template and specifying global sass files to load automatically before any other sass code. Great for mixins and variables. Load universal sass files via build > utils.js (line 43).
- Vue router with smooth scroll to top of page after transitioning routes.
- Font Awesome.

## Folder System

For the most part, the src folder is the standard structure for Vue templates. See below for some thoughts.

### data
Think of this as the database for the app. Setup configurations and various data schemas that will be used throughout the site. If using a CMS or external database then this will be used to a lesser extent.

### helpers
Javascript helpers that are useful across components.

### styles
Global styles should be placed in this top level folder. All component specific styles should go in the components themselves.

## Develop

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).