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
    
    for(let i = 0; i < itens.length; i++){
        sectionLista.innerHTML += `
            <div class="item">
                <div>
                    <input type="checkbox" id="item-${i}">

                    <div class="checkbox-customizada">
                        <img src="./img/checked.svg" alt="checked icon">
                    </div>

                    <label for="item-${i}">${itens[i].descricao}</label>
                </div>

                <button>
                    <img src="./img/trash-icon.svg" alt="imagem lixo">
                </button>
            </div>
        `
    }
}