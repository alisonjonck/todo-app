# Todo app

[![Build Status](https://travis-ci.org/alisonjonck/todo-app.svg?branch=master)](https://travis-ci.org/alisonjonck/todo-app) 

Live Demo: https://quirky-northcutt-652f57.netlify.com/

## Requirements

- Node.js (recommended: 4.x)
- npm (recommended: 2.x or 3.x)

## Install

    $ git clone https://github.com/alisonjonck/todo-app
    $ cd todo-app
    $ npm install

## Run tests

    $ npm test

## Start & watch

    $ npm start

## Simple build for production

    $ npm run build

## Config tests

Enable or disable `TEST` for `#filter` setting. Change `ENABLE_FILTER_TEST` to true or false at `webpack.config.js`.

```js
{
    plugins: [
        ...,
        new webpack.DefinePlugin({
            'ENABLE_FILTER_TEST': JSON.stringify(true)
        })
    ]
}
```
