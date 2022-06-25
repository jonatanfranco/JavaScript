const form = document.querySelector('.signup-form')
const usernamInput = document.querySelector('#username')

form.addEventListener('submit', event => {
    event.preventDefault()
    console.log(usernameInput.value)
})//para salvar o formulario e enviar ao servidor


//function verificar(){
   // let c = window.getSelection('cadastro')
    
//}