ToliWags.com
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.

You can refer to the create-react-app guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

- [Sending Feedback](#sending-feedback)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)

## Sending Feedback

We are always open to [your feedback](https://github.com/tolicodes/tolicodes.com/issues).

## Folder Structure
```
tolicodes.com/
  README.md
  node_modules/
  package.json
  apiary.apib - Describes the API in [Apiary](http://apiary.io) format
  public/ - Static files, text and images for different section of the site
    <component>
      /index.json - The API endpoint in JSON format, describing the files inside
      /text/ - The text
        <subComponent>.md - The text in MD format
      /images/ - The images for the component
    CNAME - lists the domain name (for surge.sh publishing)
    favicon.ico - the icon
    index.html - The main index.html root file
  src/
    common/ - Common components
    <Component>/ - component files (ex: home)
      assets/ - static assets, images
      components/ - subcomponents
        ...recursive
      index.js - root of the component
      actions.js - actions
      api.js - the API calls for this component
      reducer.js - the reducer for this component
      saga.js - the root saga for this component
      styles.js - common styles for this compontnet

    stories/ - [storybook](http://storybook.io) of components
    api.js - API wrapper (does proper formatting)
    index.css - Global styles
    index.js - Entry point, sets up store, router, styles, etc
    reducer.js - root reducer
    registerServiceWorker.js - For offline compatibility
    Routes.js - list of routes
    saga.js - Root saga
  
```

## Scripts

In the project directory, you can run:
* `yarn start`: Runs the app in the development mode. The page will reload if you make edits
* `yarn test`: Launches the test runner in the interactive watch mode
* `yarn build`: Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.
* `yarn deploy`: Builds and deploys to surge.sh

## Adding a Route

## Styled Components

## ESLint

## Adding Custom Environment Variables

## Deployment
### Surge

### Circle CI

## Tracking and Logging
### Google Analytics

### Hotjar

### Rollbar
