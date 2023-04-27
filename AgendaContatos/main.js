let lista = localStorage.getItem("minhaLista")
const formulario = document.querySelector("form")
const ulPessoas = document.querySelector("ul")

if (lista){
    lista = JSON.parse(lista)
}
else{
    lista = []
}

listar()


//console.log(lista)

//Criação EventListener para capturar o evento do formulário
    formulario.addEventListener("submit", function (e){
        e.preventDefault();//Função para não realizar o comportamento padrão do form (enviar um GET ou POST)
        //console.log(this)
        let novaPessoa = new Object()
        novaPessoa.nome = this.nome.value
        novaPessoa.telefone = this.telefone.value
        novaPessoa.email = this.email.value
        if(this.id.value !== "" && this.id.value >= 0){
            lista[this.id.value] = novaPessoa
        }
        else{
            lista.push(novaPessoa)//Populando a lista
        }

        this.reset()//Limpa o formulário
        this.id.value = null

        localStorage.setItem("minhaLista", JSON.stringify(lista))

        salvarLS()

        listar()
    })

    function listar(filtro = ''){ //Função para listar os dados na tela
        ulPessoas.innerHTML = ""
        lista.forEach((item, key) => {
            //Só criamos a linha se ela for encontrada com um filtro. 
            //Se tiver um index, foi encontrado dentro do nome. 
            //Usei o toUpperCase para comparar maiuscula com maiuscula.
            //Se o filtro for vazio, mostra todo mundo
            if(item.nome.toUpperCase().indexOf(filtro.toUpperCase()) >= 0 || filtro == ""){
            
            linha = document.createElement('li')

            let s = `<button onClick="excluir(${key})">Excluir</button>
                    <button onClick="editar(${key})">Editar</button>`
            
            
            linha.innerHTML = "<strong>Nome:</strong> " + item.nome + "<strong> Telefone:</strong> " + item.telefone + "<strong> E-mail</strong>: " + item.email + s
            ulPessoas.appendChild(linha)

            }
        })
    }

    function excluir(id){
        formulario.reset()
        lista.splice(id, 1)
        localStorage.setItem("minhaLista", JSON.stringify(lista))
        salvarLS()
        listar()
    }

    function editar(id){
        formulario.id.value = id
        formulario.nome.value = lista[id].nome
        formulario.telefone.value = lista[id].telefone
        formulario.email.value = lista[id].email
    }

    function salvarLS(){
        localStorage.setItem("minhaLista", JSON.stringify(lista))
    }