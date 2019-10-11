import React from "react";
import ReactDOM from "react-dom";
// import * as serviceWorker from './serviceWorker';

import App from './src/App';

const appRoot: HTMLElement = document.querySelector("#root");

ReactDOM.render(<App />, appRoot);

// serviceWorker.unregister();
