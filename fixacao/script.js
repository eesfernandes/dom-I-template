const lerValorInner = document.getElementById('paragrafo')
console.log(lerValorInner.innerHTML)

const pegarValorInput = () => {
    console.log(document.getElementById('texto').value)
}

const substituirValor = () => {
    paragrafo.innerHTML = texto.value

    texto.value = ''
}
