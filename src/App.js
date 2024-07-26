import { LitElement, css, html } from "lit"
import { fetchAllDocuments } from "./apis/documents.js"
import { Task } from "@lit/task"

export default class App extends LitElement {
  static properties = {
    documents: { state: true }
  }
  _task = new Task(this, {
    task: async () => {
      const data = await fetchAllDocuments()
      this.documents = data
      return data
    },
    args: () => []
  })
  static styles = css`
    p {
      color: red;
    }
  `
  constructor() {
    super()
    this.documents = []
  }
  render() {
    return html`<div>
      <side-bar .documents=${this.documents}></side-bar>
    </div> `
  }
}
customElements.define("root-element", App)

class Sidebar extends LitElement {
  static properties = {
    documents: {}
  }
  static styles = css`
    #sidebar {
      width: 100px;
      height: 100vh;
      border: 1px solid black;
    }
  `
  constructor() {
    super()
  }
  render() {
    return html`<div id="sidebar">
      ${this.documents.map(
        document => html`<side-bar_item .document=${document}></side-bar_item>`
      )}
    </div>`
  }
}
customElements.define("side-bar", Sidebar)

class SidebarItem extends LitElement {
  static styles = css`
    div {
      margin-left: 20px;
    }
  `
  constructor() {
    super()
  }
  render() {
    return this.renderItem(this.document)
  }
  renderItem(document) {
    const { title, documents } = document
    return html`<div>
      <h2 class="item">${title}</h2>
      ${documents.map(document => this.renderItem(document))}
    </div>`
  }
}

customElements.define("side-bar_item", SidebarItem)
