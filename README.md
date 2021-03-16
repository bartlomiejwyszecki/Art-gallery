## Description

Art gallery is a lazy-module, and http request (REST) based application, that lets user to watch gallery items, rate them, but in the future a user will be also able to add items to the cart, and log into a user panel. The backend imitation used in this project is json-server running in express, which is only storing database files, but in the near future the real backend will serve a node.js server. Gallery items layout is masonry on medium and big devices and normal on small devices.

![Art gallery photography view](https://github.com/bartlomiejwyszecki/Art-gallery/blob/main/src/assets/art-gallery-1.png)

Routing in art-gallery is based on lazy-modules and it lets user navigate to a specific item detail component. Heart rating lets user to increase a heart number of an specific item, and then is blocking the buttons on 1 minute after user exits the component with items (this solution is temporary till node.js server will not be served).

![Art gallery detail component view](https://github.com/bartlomiejwyszecki/Art-gallery/blob/main/src/assets/art-gallery-2.png)

## Technologies/tools used

* Angular v.11.0.4,
* Typescript,
* SCSS,
* Bootstrap,
* Masonry layout,
* Json-server,
* Express,
* REST Api,
* Lazy modules.

## Installation

1. Download zip or clone repository,
2. Navigate to folder with downloaded application in your terminal,
3. Write command
```
npm install
```
and then
```
npm start
```
4. Your project will be running on localhost:4001 in web browser.

## Online version

To see live version without downloading file, click link below:

[Live version](https://art-gallery-angular.herokuapp.com/home)

### Enjoy yourself ;)
