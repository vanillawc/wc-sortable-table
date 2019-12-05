[![GitHub release](https://img.shields.io/github/v/release/vanillawc/wc-sortable-table.svg)](https://github.com/vanillawc/wc-sortable-table/releases)
[![npm](https://badgen.net/npm/v/@vanillawc/wc-sortable-table)](https://www.npmjs.com/package/@vanillawc/wc-sortable-table)
[![downloads](https://badgen.net/npm/dt/@vanillawc/wc-sortable-table)](https://www.npmjs.com/package/@vanillawc/wc-sortable-table)
[![Known Vulnerabilities](https://snyk.io/test/npm/@vanillawc/wc-sortable-table/badge.svg)](https://snyk.io/test/npm/@vanillawc/wc-sortable-table)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/vanillawc/wc-sortable-table/master/LICENSE)
[![Actions Status](https://github.com/vanillawc/wc-sortable-table/workflows/Release/badge.svg)](https://github.com/vanillawc/wc-sortable-table/actions)

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

***Demo: [WC-CodeMirror - Basic Usage][]***

### Load an array of data from an external JSON file

```html
<wc-sortable-table src="data.json">
This text will blink obnoxiously
</wc-sortable-table>
```

***Demo: [wc-sortable-table - Demo][]***

[wc-sortable-table - Demo]: https://vanillawc.github.io/wc-sortable-table/demo/index.html
