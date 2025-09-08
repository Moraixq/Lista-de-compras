const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");
const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

let contador = 0;

function verificarListaVazia() {
  const itensDaLista = listaDeCompras.querySelectorAll("li");
  mensagemListaVazia.style.display = itensDaLista.length === 0 ? "block" : "none";
}

function criarItemDaLista() {
  if (inputItem.value === "") {
    alert("Por favor, insira um item!");
    return null;
  }

  const itemDaLista = document.createElement("li");

  const containerItemDaLista = document.createElement("div");
  containerItemDaLista.classList.add("lista-item-container");

  const inputCheckBox = document.createElement("input");
  inputCheckBox.type = "checkbox";
  inputCheckBox.id = "checkbox-" + contador++;

  const nomeItem = document.createElement("p");
  nomeItem.innerText = inputItem.value;

  inputCheckBox.addEventListener("change", function () {
    nomeItem.style.textDecoration = inputCheckBox.checked ? "line-through" : "none";
  });

  containerItemDaLista.appendChild(inputCheckBox);
  containerItemDaLista.appendChild(nomeItem);

  const botoesContainer = document.createElement("div");

  const botaoEditar = document.createElement("button");
  botaoEditar.innerHTML = "✏️";
  botaoEditar.classList.add("botao-acao", "botao-editar");
  botaoEditar.addEventListener("click", () => {
    const novoNome = prompt("Edite o item:", nomeItem.innerText);
    if (novoNome !== null && novoNome.trim() !== "") {
      nomeItem.innerText = novoNome;
    }
  });

  const botaoExcluir = document.createElement("button");
  botaoExcluir.innerHTML = "🗑️";
  botaoExcluir.classList.add("botao-acao", "botao-excluir");
  botaoExcluir.addEventListener("click", () => {
    itemDaLista.remove();
    verificarListaVazia();
  });

  botoesContainer.appendChild(botaoEditar);
  botoesContainer.appendChild(botaoExcluir);

  itemDaLista.appendChild(containerItemDaLista);
  itemDaLista.appendChild(botoesContainer);

  return itemDaLista;
}

botaoAdicionar.addEventListener("click", (evento) => {
  evento.preventDefault();
  const itemDaLista = criarItemDaLista();
  if (itemDaLista) {
    listaDeCompras.appendChild(itemDaLista);
  }
  verificarListaVazia();
  inputItem.value = "";
});

verificarListaVazia();
