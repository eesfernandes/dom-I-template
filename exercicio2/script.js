const getName = document.getElementById('nome')
console.log(getName.value)

const getAdress = document.getElementById('endereco')
console.log(getAdress.value)

const getEmail = document.getElementById('email')
console.log(getEmail.value)

const apagarInput = () => {
    getName.value = ''
    getAdress.value = ''
    getEmail.value = ''
}