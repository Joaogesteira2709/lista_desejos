let itens = []

const button = document.querySelector(".adicionar-item button")
button.addEventListener("click", adicionarNovoItem)

function adicionarNovoItem(){
    const descricao = document.querySelector("#item").value 

    if(descricao === ""){
        alert("Digite um item válido!")
        return
    }

    const item = {
        descricao: descricao,
        marcado: false
    }

    itens.push(item)

    document.querySelector("#item").value = ""

    mostrarListaAtualizada()
}

function mostrarListaAtualizada(){
    const sectionLista = document.querySelector(".lista")

    sectionLista.innerHTML = ""

    itens.sort((itemA, itemB) => Number(itemA.marcado) - Number(itemB.marcado))
    
    for(let i = 0; i < itens.length; i++){
        sectionLista.innerHTML += `
            <div class="item">
                <div>
                    <input type="checkbox" id="item-${i}" ${itens[i].marcado === true && "checked"}>

                <div class="checkbox-customizada" onclick="marcarItem(${i})">
                    <img src="./img/checked.svg" alt="checked">
                </div>

                <label for="item-${i}" onclick="marcarItem(${i})">${itens[i].descricao}</label>
                </div>

                <button onclick="apagarItem(${i})">
                    <img src="./img/trash-icon.svg" alt="ícone do lixo">
                </button>
            </div>
        `
    }
}

function apagarItem(indice) {
    itens.splice(indice, 1)
    mostrarListaAtualizada()
}

function marcarItem(indice) {
    itens[indice].marcado = !itens[indice].marcado
    mostrarListaAtualizada()
}