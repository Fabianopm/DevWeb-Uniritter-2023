const elemento_lista = document.querySelector('ul')
const elemento_input = document.querySelector('input')
const elemento_botao = document.querySelector('button')

//Array criado para armazenar itens dinâmicamente
const tarefas = []

//Função criada para percorrer o array e adicionar as informações dentro da ul.
function mostraTarefas(){

    //InnerHtml vazio pára limpar o que foi adicionado antes no array para não haver duplicidade.
    elemento_lista.innerHTML = ''

    for (tarefa of tarefas){
        const elementoTarefa = document.createElement('li')
        const textoTarefa = document.createTextNode(tarefa)

        const elementoLink = document.createElement('a')
        const posicao = tarefas.indexOf(tarefa)//pega a posicao do item que vamos excluir

        const linkText = document.createTextNode('X')
        elementoLink.appendChild(linkText)

        elementoLink.setAttribute('onclick', `deletaTarefa(${posicao})`)
       

        //AppendChild para colocar um filho no elementoTarefa (filho: textoTarefa)
        elementoTarefa.appendChild(textoTarefa)
        elemento_lista.appendChild(elementoTarefa)
        elementoTarefa.appendChild(elementoLink)
    }
}


mostraTarefas()

function addTarefa(){
    const textoTarefa = elemento_input.value
    //push: adiciona um elemento no final do array tarefas e retorna um novo tamanho p/ o array.
    tarefas.push(textoTarefa)
    elemento_input.value = ''

    mostraTarefas()

}

elemento_botao.setAttribute('onclick', 'addTarefa()')

document.addEventListener('keypress', function(e){
    if(e.which == 13){
        addTarefa();
    }
  }, false);

//Função para excluir a tarefa desejada
function deletaTarefa(posicao) {
    tarefas.splice(posicao, 1)//Usamos splice para remover um item (selecionado)
    mostraTarefas()//Renderiza novamenete sem o item(tarefa) removido
}