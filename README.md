[![GitHub Releases](https://badgen.net/github/tag/vanillawc/wc-sortable-table)](https://github.com/vanillawc/wc-sortable-table/releases)
[![NPM Release](https://badgen.net/npm/v/@vanillawc/wc-sortable-table)](https://www.npmjs.com/package/@vanillawc/wc-sortable-table)
[![Bundlephobia](https://badgen.net/bundlephobia/minzip/@vanillawc/wc-sortable-table)](https://bundlephobia.com/result?p=@vanillawc/wc-sortable-table)
[![MIT License](https://badgen.net/github/license/vanillawc/wc-sortable-table)](https://raw.githubusercontent.com/vanillawc/wc-sortable-table/master/LICENSE)
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

- `value` - get/set the table data

### Basic Usage

```html
<wc-sortable-table src="sample.json"></wc-sortable-table>
```

## Styling

By default, `<wc-sortable-table>` contains an un-styled `<table>` element in the lightDOM. That means, it will inherit any global CSS styles present on the site and can be styled directly using CSS.

When a sort is applied, the `<th>` element selected receives either a `.asc` or `.desc` class depending on the direction of the sort.

## Theming

Alternatively, a theme for `<wc-sortable-table>` can be specified. This will encapsulate the element in a shadowDOM -- to prevent style bleed -- and apply the style provided.

```html
<wc-sortable-table src="sample.json" theme="assets/example-theme.html"></wc-sortable-table>
```

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

## Demo

### [WC-Sortable-Table - WebComponents.dev](https://webcomponents.dev/edit/f9IfeJX878gJZibfBcPO?sv=1&pm=1)
