# React basics

## Environment Setup

En consola ejecutamos:

``` bash
# Inicializamos el proyecto
  npm init

  # Instalamos react
  npm install react react-dom --save

  # Instalamos babel para utilizar es2015
  npm install babel-loader babel-core babel-preset-es2015 babel-preset-react

  # Creamos los archivo básicos
  touch index.html App.js main.js webpack.config.js
```

#### webpack config

``` javascript
  // webpack.config.js

  module.exports = {
    entry: './main.js',
    output: {
      path: './',
      filename: 'index.js'
    },
    devServer: {
      inline: true,
      port: 3333
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'react']
          }
        }
      ]
    }
  }
```

#### package.json

Agregamos el script para correr el servidor
``` javascript
  // package.json

  ...
  "scripts": {
    "start": "webpack-dev-server"
  },
  ...
```

#### index.html
Agregamos la aplicación al documento

``` html
  <!-- index.html -->

  ...
  <body>
    <div id="app"></div>
    <script src="index.js"></script>
  </body>
```

#### App.js

``` javascript
  // App.js

  import React from 'react';
  class App extends React.Component {
    render() {
      return <div>Hello</div>
    }
  }

  export default App
```

#### main.js

``` javascript
  // main.js

  import React from 'react';
  import ReactDom from 'react-dom';
  import App from './App';
  ReactDom.render(<App />, document.getElementById('app'))
```
