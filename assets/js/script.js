let name = window.document.getElementById('name')
let email = document.querySelector('#email')
let subject = document.querySelector('#subject')
let nameOk = false
let emailOk = false
let subjectOk = false

name.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (name.value.length < 3){
        txt.innerHTML = "Nome Inválido"
        txt.style.color = 'red'
    } else {
        txt.innerHTML = "Nome Válido"
        txt.style.color = 'green'
        nameOk = true
    }
}

function validaEmail() {
let txtemail = document.querySelector('#txtemail')

if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    txtemail.innerHTML = 'Email inválido'
    txtemail.style.color = 'red'
} else {
    txtemail.innerHTML = 'Email válido'
    txtemail.style.color = 'green'
    emailOk = true
}

}

function validaAssunto(){
let txtsubject = document.querySelector('#txtsubject')

if (subject.value.length >= 100) {   
    txtsubject.innerHTML = "Digite no máximo 100 caracteres"
    txtsubject.style.color = 'red'
    txtsubject.style.display = 'block'
} else {
    txtsubject.style.display = 'none'
    subjectOk = true
}

}

function send() {
    if (nameOk == true && emailOk == true && subjectOk == true) {
        alert ('Formulário enviado com sucesso')
    } else {
        alert ('Preencha o formulário corretamente')
    }
}