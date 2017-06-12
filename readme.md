# Zulip Style Guide

This is a template for making a style guide along with the content for the actual Zulip Style Guide.

## Setup

Install all pre-requesite node modules by running `npm install`. This is a simple node server using express and pug, so just run `npm run dev` to launch it. It will run on port `1234`, so to view just go to `localhost:1234`.

## Structure

### Sidebar Construction
The hashes for the pages along with the sidebar construction is in `public/js/store.js`, where Vue.js loops through it to print out each sidebar item.


### Routing
There is a basic JavaScript library that does hash routing. You can find the routes in `public/js/main.js`, which are called with the `router.add` method.

## Writing Content

Content is written in markdown in the `public/docs` folder, where the directory structure is the same as the hash, so if the hash is `#components/Blocks and Cards`, then the file is located in `public/docs/components/Blocks and Cards.md`.

The page does not need to be reloaded to fetch the latest markdown, just click to a new tab and back as it fetches every time the hash loads.


### Styling

Please try to notice and emulate the styles of the other markdown pages; the headers, subheaders, hr, and content norms.
