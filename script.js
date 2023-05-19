

const container = document.querySelector("ul");

const fabrica = {

  opcoes: ["feijao","milho","ervilha","sardinhas","pessego"],

  quantidade_de_latas: 10,

  cria_latas() {
    for(let i = 0; i < this.quantidade_de_latas; i++){
      let new_node = document.createElement("li");
      let lata_vazia = {
        marca: "dev.Foods()",
        opcao: undefined,
        elemento: container.appendChild(new_node)
      };
      lata_vazia.elemento.innerHTML = `Lata ${i} <span> Opcao </span>`;
      this.latas.push(lata_vazia);
    }
    return this.latas;
  },

  define_opcoes() {
    for(let lata of this.latas){
      lata.opcao = this.seleciona_opcao_aleatoria();
    }
  },

  seleciona_opcao_aleatoria() {
    let indice_aleatorio = Math.floor(Math.random() * this.opcoes.length);
    return this.opcoes[indice_aleatorio];
  },

  latas: [],
}

function atualiza_latas() {
  fabrica.define_opcoes();
  coloca_latas_na_tela();
}

function limpa_classes() {
  for(let lata of fabrica.latas){
    lata.elemento.classList.remove(lata.opcao);
  }
}

function coloca_latas_na_tela() {
  for(let lata of fabrica.latas){
    let comidaSpan = lata.elemento.firstElementChild;
    lata.elemento.className = ""; // deleta todas as classes do elemento

    /* ADICIONAR CODIGOS AQUI PARA MUDAR O CONTEUDO
      * DO SPAN DE ACORDO COM O NOME.
      * MUDAR TAMBEM A CLASSE DO li DENTRO DO ul
      * PARA QUE APAREÇA O BACKGROUND CORRETAMENTE DE
      * ACORDO COM A OPCAO
      * */
  }
}
function inicializa_pagina(){
for (let lata of fabrica.latas)
    lata.elemento.firstElementChild.innerText = "COMIDA";

}

fabrica.cria_latas();
