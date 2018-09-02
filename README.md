## Summary

This repository was originally created for this medium article about developing a simple webpack based app for both web and electron. This is not meant to be a starter/boilerplate of any kind, just a proof of concept! 

`webpack-electron` is a great starting point for anyone looking to use webpack and electron together.

This is a redo for Webpack 3/4. It's intent is to recreate the original intentions of the first article as closely as possible with changes to webpack. It does not take care of some key issues, such as conditionally requiring electron renderer runtime modules, or automatically reloading the electron app, etc.

## Getting Started

`yarn` everything first!

then you have these commands:

`yarn web:dev` - development version of the webapp, at http://localhost:8080 if run before/without electron command
`yarn electron:dev` - development version of the electron app


these two can be run side by side, or you can just run

`yarn all:dev` - runs both of the above commands in parallel, with web at http://localhost:8081


## What next?

If you are looking for a starter kit, there are many excellent electron boilerplates that could be customized for this purpose. With electron, you want to have your development and release toolchain down pat. Don't sacrafice having that just because your boilerplate doesn't have this one specific feature (building to a web target).

Next episode I will recreate this using `webpack-electron`, and show some patterns you can use for conditionally loading electron-renderer specific dependencies.