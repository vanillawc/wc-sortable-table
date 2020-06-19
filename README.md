<h1 align="center">&lt;wc-sortable-table&gt;: A HTML Table with Sort</h1>

<div align="center">
  <a href="https://github.com/vanillawc/wc-sortable-table/releases"><img src="https://badgen.net/github/tag/vanillawc/wc-sortable-table" alt="GitHub Releases"></a>
  <a href="https://www.npmjs.com/package/@vanillawc/wc-sortable-table"><img src="https://badgen.net/npm/v/@vanillawc/wc-sortable-table" alt="NPM Releases"></a>
  <a href="https://bundlephobia.com/result?p=@vanillawc/wc-sortable-table"><img src="https://badgen.net/bundlephobia/minzip/@vanillawc/wc-sortable-table" alt="Bundlephobia"></a>
  <a href="https://raw.githubusercontent.com/vanillawc/wc-sortable-table/master/LICENSE"><img src="https://badgen.net/github/license/vanillawc/wc-sortable-table" alt="MIT License"></a>
  <a href="https://www.webcomponents.org/element/vanillawc/wc-sortable-table"><img src="https://img.shields.io/badge/webcomponents.org-published-blue.svg" alt="Published on WebComponents.org"></a>
  <a href="https://github.com/vanillawc/wc-sortable-table/actions"><img src="https://github.com/vanillawc/wc-sortable-table/workflows/Latest/badge.svg" alt="Latest Status"></a>
  <a href="https://github.com/vanillawc/wc-sortable-table/actions"><img src="https://github.com/vanillawc/wc-sortable-table/workflows/Release/badge.svg" alt="Release Status"></a>
</div>

## Installation

*Installation*
```sh
npm i @vanillawc/wc-sortable-table
```

*Import from NPM*
```html
<script type="module" src="node_modules/@vanillawc/wc-sortable-table/index.js"></script>
```

*Import from CDN*
```html
<script type="module" src="https://cdn.jsdelivr.net/gh/vanillawc/wc-sortable-table/index.js"></script>
```

## Demo

Try it on [WebComponents.dev](https://webcomponents.dev/edit/f9IfeJX878gJZibfBcPO?sv=1&pm=1)

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
