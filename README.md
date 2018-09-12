# safeget 🛡
`V1.0`

[![Build Status](https://travis-ci.org/NickitaX/safeget.svg?branch=master)](https://travis-ci.org/NickitaX/safeget)

> Super simple NPM module which allows to safely unwrap complex JSON files and provide default value in case of failure

## Build Setup

In order to add safeget to your project, run:
``` bash
npm i safeget
```
You can use safeget by passing JSON as a result of an anonymous function + default value as follows:

```js
const safeget = require("safeget")

const really = {
  what: {
    can: {
      go: {
        wrong: '?'
      }
    }
  }
}

const core = safeget(() => really.what.can.go.wrong, 'stub!')
```

If JSON contains required node, it will be retrieved. In case node doesn't exist, defauls value ('stub!' in example) will be assigned instead.

Feel free to contribute!

