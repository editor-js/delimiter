![](https://badgen.net/badge/Editor.js/v2.0/blue)

# Delimiter Tool for Editor.js

Delimiter Tool for the [Editor.js](https://editorjs.io).

![](assets/68747470733a2f2f636170656c6c612e706963732f64653730653766382d353663642d343737392d383438662d3532633366363864656234372e6a7067.jpeg)

## Installation

Get the package

```shell
yarn add @editorjs/delimiter
```

Include module at your application

```javascript
import Delimiter from '@editorjs/delimiter';
```

Optionally, you can load this tool from CDN [JsDelivr CDN](https://cdn.jsdelivr.net/npm/@editorjs/delimiter@latest)

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

