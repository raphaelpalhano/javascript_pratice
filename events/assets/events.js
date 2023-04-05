const botaoAdicionarRemover = document.querySelector("button");
const meuPai = document.querySelector("body");
let estadoBotao = "adicionar";

function createElementAndRemove(){
    botaoAdicionarRemover.addEventListener("click", function(event) {
        if (estadoBotao === "adicionar") {
            // criar novo elemento
            const novoElemento = document.createElement("p");
            novoElemento.textContent = "Este é um novo elemento!";
            console.log(event);
            // adicionar novo elemento como filho do elemento pai
            meuPai.append(novoElemento);
      
            // atualizar o estado do botão para "remover"
            estadoBotao = "remover";
            botaoAdicionarRemover.textContent = "Remover elemento";
        } else {
            // remover o último elemento adicionado
            const ultimoElemento = meuPai.lastChild;
            if (ultimoElemento) {
                ultimoElemento.remove();
            }
      
            // atualizar o estado do botão para "adicionar"
            estadoBotao = "adicionar";
            botaoAdicionarRemover.textContent = "Adicionar elemento";
        }
    });
}

createElementAndRemove();

