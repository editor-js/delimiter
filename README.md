![](https://badgen.net/badge/@Editojs-Delimiter/v1.1.1/blue)   [![](https://data.jsdelivr.com/v1/package/npm/@itech-indrustries/delimiter/badge)](https://www.jsdelivr.com/package/npm/@itech-indrustries/delimiter)

# Delimiter Tool for Editor.js

Delimiter Tool for the [Editor.js](https://editorjs.io).

![Screenshot from 2020-08-07 04-40-19](https://user-images.githubusercontent.com/55910733/89591561-1f353300-d868-11ea-951b-60f27dda08ae.png)

## Installation

### Install via NPM

Get the package

```shell
npm i @itech-indrustries/delimiter
```

Include module at your application

```javascript
const Delimiter = require('@itech-indrustries/delimiter');
```

### Download to your project's source dir

1. Upload folder `dist` from repository
2. Add `dist/bundle.js` file to your page.

### Load from CDN

You can load specific version of package from [jsDelivr CDN](https://www.jsdelivr.com/package/npm/@itech-indrustries/delimiter).

`https://cdn.jsdelivr.net/npm/@itech-indrustries/delimiter@1.1.1`

Require this script on a page with Editor.js.

```html
<script src="https://cdn.jsdelivr.net/npm/@itech-indrustries/delimiter@latest"></script>
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

