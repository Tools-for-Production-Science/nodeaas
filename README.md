# Introduction
This is a very basic implementation of the asset administration shell concept in typescript. It shall help people understand the concept easily by providing only the neccessary code to setup a very simple AAS. The project is divided into three components currently: core, server and utility (currently emtpy). Core includes all basic elements like the aas itself, submodel class, asset class and so on. The server component tries to provide everything needed to setup a server routing requests to the registered AAS element. 
# How to install & use

First of all install all neccessary packages:
```
npm i
```
Second, create a built folder next to the src folder.
Then, it is recommended to install typescript compiler globally.
```
npm i -g typescript
```
To compile the code into build, it is recommended to use watch mode
```
tsc -w //Watch mode
tsc //compile just once
```
After that the code can be run via vs code and the given launch task or via
```
node ./built/main.js
```

The AAS from the given example in main.ts can be requested via
localhost:3001/aas/MyShell

Similar, a submodel can be requested via
localhost:3001/aas/submodels/MySubmodel

In any other case, status code 404 is returned.
