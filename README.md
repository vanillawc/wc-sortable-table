[![GitHub Releases](https://img.shields.io/github/v/release/vanillawc/wc-sortable-table.svg)](https://github.com/vanillawc/wc-sortable-table/releases)
[![NPM Release](https://badgen.net/npm/v/@vanillawc/wc-sortable-table)](https://www.npmjs.com/package/@vanillawc/wc-sortable-table)
[![Downloads](https://badgen.net/npm/dt/@vanillawc/wc-sortable-table)](https://www.npmjs.com/package/@vanillawc/wc-sortable-table)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/vanillawc/wc-sortable-table/master/LICENSE)
[![Published on WebComponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/vanillawc/wc-sortable-table)
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
- `theme` - an external theme file

**Properties**

- `value` - get/set the editor's contents

### Basic Usage

```html
<wc-sortable-table src="sample.json"></wc-sortable-table>
```

***Demo: [Basic Usage - Demo][]***

## Styling

By default, `<wc-sortable-table>` contains an un-styled `<table>` element in the lightDOM. That means, it will inherit any global CSS styles present on the site and can be styled directly using CSS.

When a sort is applied, the `<th>` element selected receives either a `.asc` or `.desc` class depending on the direction of the sort.

## Theming

Alternatively, a theme for `<wc-sortable-table>` can be specified. This will encapsulate the element in a shadowDOM -- to prevent style bleed -- and apply the style provided.

```html
<wc-sortable-table src="sample.json" theme="assets/example-theme.html"></wc-sortable-table>
```

***Demo: [Basic Usage - 'theme' Attribute][]***

## Creating Themes

A theme contains a `<style>` element with the CSS that will be applied to the element.

*example-theme.html*

```html
<style>
  table, th, td {
    border: 1px solid black;
  }
  
  .asc:after {
    content: "▲";
    color: red;
    font-size: .75rem;
    vertical-align: text-top;
    text-align:right;
  }
  
  .desc:after {
    content: "▼";
    color: red;
    font-size: .75rem;
    vertical-align: text-top;
    text-align: right;
  }
</style>
```

[Basic Usage - Demo]: https://vanillawc.github.io/wc-sortable-table/demo/basic-usage.html
[Basic Usage - 'theme' Attribute]: https://vanillawc.github.io/wc-sortable-table/demo/theme-attribute.html
