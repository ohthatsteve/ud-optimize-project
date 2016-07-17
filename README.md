## Website Performance Optimization portfolio project

This is my version of the Udacity Website Performance Optimization project, forked from [here](https://github.com/udacity/frontend-nanodegree-mobile-portfolio)

### Getting started
To get started, check out [this link](https://ohthatsteve.github.io/ud-optimize-project/).  If you 
are forking this repo, use the following steps to install and make use of the task runner.

1. In your terminal, navigate to the top folder of the project directory
2. Run `npm install`
3. Now you are able to use the gulp tasks defined in `gulpfile.js` (Note: All of these commands target files in `/src` and `/src/views` and stores them in `/dist`.  If you only want to run the task in just `/src` or `/src/views`, prefix the command with `main-` or `view-`.  i.e. `main-critical`)
  -`gulp scripts` minifies javascripts.
  -`gulp styles` minifies CSS.
  -`gulp html` removes whitespace from html files.
  -`gulp critical` attempts to inline critical-path CSS.
  -`gulp images` compresses images.

###Overview of Files

####Index.html overview

On the initial page load of `index.html`, you will be presented with a short description of myself as well as 4 links to pages generated by Udacity.
The last link, Cam's Pizzeria, will take you to `pizza.html`, where most of the magic happens. 

####Pizza.html overview

This is a project page for a fake pizzeria.  This page features pizza images that move across the background, as well as pizza images that change sizes depending on the users size selection.  Both of these actions are done by javascript found in `views/js/main.js`.  This file had a few optimization issues that I have attempted to fix, and are outlined below.

####Main.js optimization 

