// node_modules/@vanillaes/interpolate/index.js
function interpolate(template, tags = {}) {
  const keys = Object.keys(tags);
  const values = Object.values(tags);
  try {
    return new Function(...keys, `return \`${template}\`;`)(...values);
  } catch (e) {
    throw new TemplateException(template, tags, e);
  }
}
var TemplateException = class extends Error {
  constructor(template, tags, message) {
    super();
    this.name = "TemplateError";
    let msg = "\n------------------\n";
    msg += `Template: \`${template}\``;
    msg += "\n------------------\n";
    msg += `Tags: ${JSON.stringify(tags, null, 2)}`;
    msg += "\n------------------\n";
    msg += message;
    this.message = msg;
  }
};

// src/wc-sortable-table.js
var WCSortableTable = class extends HTMLElement {
  static get observedAttributes() {
    return ["src"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.__initialized) {
      return;
    }
    if (oldValue !== newValue) {
      this[name] = newValue;
    }
  }
  get src() {
    return this.getAttribute("src");
  }
  set src(value) {
    this.setAttribute("src", value);
    this.setSrc(value);
  }
  get value() {
    return this.__data;
  }
  set value(value) {
    this.setValue(value);
  }
  constructor() {
    super();
    this.__initialized = false;
    this.__theme = null;
    this.__data = null;
    this.__table = null;
    this.__column = null;
    this.__headers = null;
    this.__selected = null;
  }
  async connectedCallback() {
    this.__table = document.createElement("table");
    if (this.hasAttribute("theme")) {
      this.__theme = document.createElement("template");
      this.__theme.innerHTML = await this.getTheme();
      this.attachShadow({mode: "open"});
      this.shadowRoot.appendChild(this.__theme.content.cloneNode(true));
      this.shadowRoot.appendChild(this.__table);
    } else {
      this.appendChild(this.__table);
    }
    if (this.hasAttribute("src")) {
      this.setSrc();
    }
    this.__initialized = true;
  }
  async getTheme() {
    const path = this.getAttribute("theme");
    const contents = await this.fetchTheme(path);
    return interpolate(contents);
  }
  async fetchTheme(src) {
    const response = await fetch(src);
    if (response.status !== 200)
      throw Error(`ERR ${response.status}: ${response.statusText}`);
    return response.text();
  }
  async setSrc() {
    if (this.hasAttribute("src")) {
      this.__data = await this.fetchSrc(this.src);
      this.render();
    }
  }
  async fetchSrc(src) {
    const response = await fetch(src);
    if (response.status !== 200)
      throw Error(`ERR ${response.status}: ${response.statusText}`);
    return response.json();
  }
  setValue(value) {
    this.__data = value;
    this.render();
  }
  sortData(data) {
    if (this.__column === null) {
      return data;
    }
    const col = this.__column;
    const dir = this.__direction;
    const comp = dir ? (a, b) => a < b : (a, b) => a > b;
    return data.sort((a, b) => {
      return comp(a[col], b[col]) ? -1 : 1;
    });
  }
  headerClicked(e) {
    this.__selected = e.target.cellIndex;
    const column = e.target.cellIndex;
    this.__direction = column !== this.__column ? true : !this.__direction;
    this.__column = column;
    this.render();
  }
  styleHeaders() {
    const dir = this.__direction ? "asc" : "desc";
    const notDir = this.__direction ? "asc" : "desc";
    for (const th of this.__headers.children) {
      if (th.cellIndex === this.__selected) {
        if (th.classList.contains(notDir)) {
          th.classList.remove(notDir);
        } else {
          th.classList.add(dir);
        }
      } else {
        if (th.classList.contains(dir)) {
          th.classList.remove(dir);
        }
        if (th.classList.contains(notDir)) {
          th.classList.remove(notDir);
        }
      }
    }
  }
  render() {
    let data = [...this.__data];
    const table = document.createElement("table");
    this.__headers = document.createElement("tr");
    this.__headers.addEventListener("click", (e) => this.headerClicked(e));
    const headers = data.shift();
    headers.forEach((header) => {
      const th = document.createElement("th");
      th.innerText = header;
      this.__headers.appendChild(th);
    });
    this.styleHeaders();
    const thead = document.createElement("thead");
    thead.appendChild(this.__headers);
    table.appendChild(thead);
    data = this.sortData(data);
    const tbody = document.createElement("tbody");
    data.forEach((row) => {
      const tr = document.createElement("tr");
      row.forEach((cell) => {
        const td = document.createElement("td");
        td.innerText = cell;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    if (this.__theme) {
      this.shadowRoot.removeChild(this.__table);
      this.__table = table;
      this.shadowRoot.appendChild(this.__table);
    } else {
      this.removeChild(this.__table);
      this.__table = table;
      this.appendChild(this.__table);
    }
  }
};
customElements.define("wc-sortable-table", WCSortableTable);
export {
  WCSortableTable
};
