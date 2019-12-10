[![GitHub Releases](https://img.shields.io/github/v/release/vanillawc/wc-sortable-table.svg)](https://github.com/vanillawc/wc-sortable-table/releases)
[![NPM Release](https://badgen.net/npm/v/@vanillawc/wc-sortable-table)](https://www.npmjs.com/package/@vanillawc/wc-sortable-table)
[![Downloads](https://badgen.net/npm/dt/@vanillawc/wc-sortable-table)](https://www.npmjs.com/package/@vanillawc/wc-sortable-table)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/vanillawc/wc-sortable-table/master/LICENSE)
[![Published on WebComponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@vanillawc/wc-sortable-table)
[![Latest Status](https://github.com/vanillawc/wc-sortable-table/workflows/Latest/badge.svg)](https://github.com/vanillawc/wc-sortable-table/actions)
[![Release Status](https://github.com/vanillawc/wc-sortable-table/workflows/Release/badge.svg)](https://github.com/vanillawc/wc-sortable-table/actions)

A sortable table vanilla web component

 <!-- TODO: Add video graphic here -->

-----

## Installation

```sh
npm i @vanillawc/wc-sortable-table
```

Then import the `index.js` file at the root of the package.

-----

## Usage

**Attributes**

- `src` - load an external source file

**Properties**

- `value` - get/set the editor's contents

### Basic Usage

```html
<wc-codemirror src="./assets/sample.js"></wc-codemirror>
```

### Load an array of data from an external JSON file

```html
<wc-sortable-table src="data.json">
This text will blink obnoxiously
</wc-sortable-table>
```

## Styling

When a header is clicked, a class (ie asc|desc) is added marking the direction of the sort. The default styles for these classes are.

```css
.asc:after {
  content: "▲";
  color: gray;
  font-size: .75rem;
  vertical-align: text-top;
  text-align:right;
}

.desc:after {
  content: "▼";
  color: gray;
  font-size: .75rem;
  vertical-align: text-top;
  text-align: right;
}
```


***Demo: [wc-sortable-table - Demo][]***

[wc-sortable-table - Demo]: https://vanillawc.github.io/wc-sortable-table/demo/index.html
