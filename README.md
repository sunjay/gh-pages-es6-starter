# gh-pages-es6-starter
I often make projects and publish them on GitHub pages. In order to avoid
dealing with transpilers and the fact that GitHub pages doesn't support
doing that for me, I usually just code in Vanilla JS. Given how awesome
ES6/ES7 and React are, that's just not good enough anymore.

This project aims to allow you to quickly clone something and get it ready
to be used on your next project. It's distinguishing feature from the
hundreds of other projects like it is that it explicitly aims for GitHub
pages usage and makes publishing to your `gh-pages` branch a breeze.

## Features

- ES6 (Babel Stage 1) + React
- SCSS + autoprefixer
- Webpack Dev Server + Hot Reloading
- [CSS modules (CSS embedded in your JavaScript bundle) + usage with :local()](https://github.com/webpack/css-loader#local-scope)
- Easy commands to build and deploy to GitHub pages on a `gh-pages` branch

## Starter Kit Usage & Setup
Using this starter kit is easy and just takes a few steps.

1. Clone this repo

    If in an existing folder:

        git clone https://github.com/sunjay/gh-pages-es6-starter.git .

    For a new folder:

        mkdir myproj
        git clone https://github.com/sunjay/gh-pages-es6-starter.git myproj

2. Delete the existing git repository by running

        cd myproj # if you are not in the folder yet
        rm -rf .git

3. Initialize a new git repository with

        git init
        git add .
        git commit -m "Initial commit"

4. Go through the fields in the package.json file and put in
your own information. Change the license if necessary to whatever suits your
project.

5. Run `npm install` to install the dependencies.

6. Run `npm start` to run the development server. This will automatically hot reload your code when it changes (with some limitations).

6. Go to `http://localhost:8080` to see the app running. 

You can run `npm start` and go to that address anytime now to see your code.

## Building & Deploying
1. Run `npm run build` to compile all necessary files in a `dist` folder.

2. Run `npm run deploy` to checkout `gh-pages` (created if not already there), merge master, build the code, commit and push the generated bundle.

Deploy will use `git subtree push` as described in the article [*Deploying a subfolder to GitHub pages*](https://gist.github.com/cobyism/4730490).

## More information
This starter kit assumes that your application entry point is a file
called `src/index.js`. If this is not the case, change that value in the
webpack configuration.

The bundle name is `dist/bundle.js`. That can also be adjusted in the
webpack configuration file.

**Note:** Changing any of these folders or file names may break other commands that have been implemented. Do so at your own risk.

When just running the development server. The bundle and other `dist/` files are kept in memory. Use the build command to explicitly put them there. This will be done for you when you deploy so you don't need to ever really do that unless you want to see the built result.

