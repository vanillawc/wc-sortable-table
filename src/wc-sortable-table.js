/* eslint no-undef: 0 */
const template = document.createElement('template');
template.innerHTML = `
<style>
table, th, td {
  border: 1px solid black;
}

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
</style>
`;

export class WCSortableTable extends HTMLElement {
  static get observedAttributes () {
    return ['src'];
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
    }
  }

  get src () { return this.getAttribute('src'); }
  set src (value) {
    this.setAttribute('src', value);
    this.setSrc(value);
  }

  get value () { return this.__data; }
  set value (value) {
    this.setValue(value);
  }

  constructor () {
    super();
    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback () {
    this.__data = null;
    this.__table = null;
    this.__column = null;
    this.__headers = null;
    this.__selected = null;
    this.__table = document.createElement('table');
    this.appendChild(this.__table);
  }

  async setSrc () {
    if (this.hasAttribute('src')) {
      this.source = await this.fetch(this.src);
      this.__data = JSON.parse(this.source);
      this.renderTable();
    }
  }

  setValue (value) {
    this.__data = value;
    this.renderTable();
  }

  async fetch (src) {
    const response = await fetch(src);
    return response.text();
  }

  sortData (data) {
    if (this.__column === null) { return data; }
    const col = this.__column;
    const dir = this.__direction;
    const comp = dir
      ? (a, b) => a < b
      : (a, b) => a > b;
    return data.sort((a, b) => {
      return comp(a[col], b[col]) ? -1 : 1;
    });
  }

  headerClicked (e) {
    this.__selected = e.target.cellIndex;
    const column = e.target.cellIndex;
    this.__direction = (column !== this.__column)
      ? true : !this.__direction;
    this.__column = column;
    this.renderTable();
  }

  styleHeaders () {
    const dir = this.__direction ? 'asc' : 'desc';
    const notDir = this.__direction ? 'asc' : 'desc';
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
      console.dir(th);
    }
  }

  renderTable () {
    let data = [...this.__data];

    const table = document.createElement('table');

    this.__headers = document.createElement('tr');
    this.__headers.addEventListener('click', e => this.headerClicked(e));

    // build the headers row
    const headers = data.shift();
    headers.forEach(header => {
      const th = document.createElement('th');
      th.innerText = header;
      this.__headers.appendChild(th);
    });
    this.styleHeaders();
    table.appendChild(this.__headers);

    // sort the values
    data = this.sortData(data);

    // build the data rows
    data.forEach(row => {
      const tr = document.createElement('tr');
      row.forEach(cell => {
        const td = document.createElement('td');
        td.innerText = cell;
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
    this.removeChild(this.__table);
    this.__table = table;
    this.appendChild(this.__table);
  }
}

customElements.define('wc-sortable-table', WCSortableTable);
