class emprestimos_user extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const div = document.createElement('div'); 
    div.className = "card mb-3 mt-3";
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${this.getAttribute("img")}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${this.getAttribute("titulo")}</h5>
        <p class="card-text">${this.getAttribute("descricao")}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
    `;
    this.appendChild(div);
  }
}
customElements.define("emprestimos-user", emprestimos_user);