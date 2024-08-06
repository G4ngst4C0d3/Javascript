const frm = document.querySelector("form")  //obtem elementos da página
const dvQuadro = document.querySelector("#divQuadro")

frm.addEventListener("submit", (e) => {
    e.preventDefault() //previne o comportamento padrão do formulário
    
    const tarefa = frm.inTarefa.value
    const h5 = document.createElement("h5") // cria o elemento html h5
    const texto = document.createTextNode(tarefa) // cria um texto
    h5.appendChild(texto) // adiciona o texto que será filho de h5
    dvQuadro.appendChild(h5) 

    frm.inTarefa.value = "" // limpa o campo de edição
    frm.inTarefa.focus()
})

frm.btSelecionar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5") // obtem tags h5 da página

    if(tarefas.length == 0){
        alert("Não há tarefas para serem selecionadas.")
        return // retorna
    }

    let aux = -1 // variável para indicar linha selecionada

    for(let i=0; i < tarefas.length; i++){
        if(tarefas[i].className = "tarefa-selecionada"){
            tarefas[i].className = "tarefa-normal" // troca para normal
            aux = i
            break
        }
    }
    // se a linha que está selecionada é a última volta para a primeira
    if(aux == tarefas.length -1){
        aux = -1
    }
    tarefas[aux + 1].className = "tarefa-selecionada" // muda estilo da proxima linha
})

frm.btRetirar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5") // obtem tags h5 da página
    let aux = -1 // varialvel irá indicar linha selecionada

    tarefas.forEach((tarefa, i) => {
        if(tarefa.className == "tarefa-selecionada"){
            aux = i
        }
    }) 
    if(aux == -1){ //lista vazia
        alert("Não há tarefas para serem retiradas.")
        return // retorna
    }

    //Solicita a confirmação
    if(confirm(`Confirma a exclusão da tarefa "${tarefas[aux].innerText}"?`)){
        divQuadro.removeChild(tarefas[aux]) // remove um dos filhos divQuadro
    }
    
})

frm.btGravar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5") // obtem tags h5 da página
    if(tarefas.length == 0){
        alert("Não há tarefas para serem gravadas.")
        return // retorna
    }
    let dados = "" // irá acumular os dados a serem salvos
    tarefas.forEach(tarefa => {
        dados += tarefa.innerText + ";" // adiciona cada tarefa a variável dados
    })

    localStorage.setItem("tarefasDia", dados.slice(0, -1))
    if(localStorage.getItem("tarefasDia")){
        alert("Tarefas gravadas com sucesso!")
    }
})
window.addEventListener("load", () => {
    if(localStorage.getItem("tarefasDia")){
        const dados = localStorage.getItem("tarefasDia").split(";") // cria um vetor com a lista de tarefas
        dados.forEach(dado => { // percorre os dados armazenados no localStorage
            const h5 = document.createElement("h5") // cria um elemento h5
            const texto = document.createTextNode(dado) // cria um texto
            h5.appendChild(texto) // define que o texto será filho de h5 
            dvQuadro.appendChild(h5) // h5 será filho de divQuadro
        })
    }
})

