function validar(){
    //declarar variavel
    let nome = cadastro.nome.value
    let descricao = cadastro.descricao.value

    if (nome==""){
        alert("Campo nome é obrigatório!")
        cadastro.nome.focus()
        return false
    }
    if (descricao==""){
        alert("Campo descrição é obrigatório!")
        cadastro.email.focus()
        return false
    }
}