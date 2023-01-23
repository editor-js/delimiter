![](https://badgen.net/badge/Editor.js/v2.0/blue)

# Delimiter Tool for Editor.js

Delimiter Tool for the [Editor.js](https://editorjs.io).

![](assets/68747470733a2f2f636170656c6c612e706963732f64653730653766382d353663642d343737392d383438662d3532633366363864656234372e6a7067.jpeg)

## Installation

### Install via NPM

Get the package

```shell
npm i --save-dev @editorjs/delimiter
```

Include module at your application

```javascript
const Delimiter = require('@editorjs/delimiter');
```

### Download to your project's source dir

1. Upload folder `dist` from repository
2. Add `dist/bundle.js` file to your page.

### Load from CDN

You can load specific version of package from [jsDelivr CDN](https://www.jsdelivr.com/package/npm/@editorjs/delimiter).

`https://cdn.jsdelivr.net/npm/@editorjs/delimiter@1.0.1`

Require this script on a page with Editor.js.

```html
<script src="..."></script>
```

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
var editor = EditorJS({
  ...

  tools: {
    ...
    delimiter: Delimiter,
  }

  ...
});
```

## Config Params

This Tool has no config params

## Output data

This Tool returns empty object.

```json
{
    "type" : "delimiter",
    "data" : {}
}
```

