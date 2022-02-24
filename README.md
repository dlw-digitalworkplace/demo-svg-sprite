# Getting Started with Create React App

This project contains a sample on how to use svg symbols and svg-sprite
 - svg icons are added as separate svg symbol files in `svg-symbols/symbols`
 - path and link to the symbols are added to Symbols.ts under `svg-symbols`
 - svg-sprite package is used to compile the symbols into 1 svg and place them in the public folder (see `svg-config.json` in the root)
 - the `svg-sprite` package is used to do the actual compiling
 - run `npm run svg-compile` to bundle all svg symbols into 1 file

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.



## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
