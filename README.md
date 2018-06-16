# qa-system

> A Q&A system front-end

## Run and Build
1. Download the zip file or run `git clone https://github.com/zchwhu/qa-system.git` in your command line window.
2. Run `npm install` to install dependencies first.
3. Run `npm run dev` to run the application.
4. Open `http://localhost:8080` in your browser to see the project.
5. If you want to modify according to your own needs, just modify codes in `src` folder.
6. Run `npm run build` to bundle the project for production.

## Technology Stack
1. [Vue-cli](https://github.com/vuejs/vue-cli) for project init.
2. [jQuery](https://github.com/jquery/jquery) for dom operation.
3. [Sass](https://github.com/sass/sass) for CSS extension.
4. [Axios](https://github.com/axios/axios) for making http requests.
5. [SockJS-client](https://github.com/sockjs/sockjs-client) for WebSocket communication in browser.
6. [Stompjs](https://github.com/jmesnil/stomp-websocket) for providing stomp client in browser.
7. [Webpack](https://github.com/webpack/webpack) for bundling modules.

## Code Structure
**The main code is in `src` folder**, the structure of this folder is as follows:
1. `index.js` file: the entry `.js` file of the application.
2. `api` folder: the interfaces interacting with server.
3. `assets` folder: the images using in the application.
4. `class` folder: the class definition in the application.
5. `fonts` folder: the icon font using in the application.
6. `const` folder: some constant definition in the application.
7. `server` folder: the interfaces in server side just for test.
8. `style` folder: the style sheets in the application.
9. `util` folder: some utility functions using in the application.
