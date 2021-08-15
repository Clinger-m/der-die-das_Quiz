
// pegando os botões

const botaoDer = document.getElementById('btn-der')
const botaoDie = document.getElementById('btn-die')
const botaoDas = document.getElementById('btn-das')
const content = document.getElementById('content')
const underTitle = document.getElementById('under-title')
const espaco = document.getElementById('espaco')
const richtig = document.getElementById('richtig')
const palavra = document.getElementById('palavra')
const modal = document.getElementById('modal-wrapper')
const modalBtn = document.getElementById('btn-reset')
const modalRes = document.getElementById('modal-res')


//biblioteca de palavras
const refArtigos = {
    der: ['Apfel', 'Tisch', 'Mann'],
    die: ['Frau', 'Kinder', 'Tasche'],
    das: ['Kind', 'Mädchen', 'Buch']
}

// inicializando as variáveis
let check = false
let cont = 0
let acertos = 0
let erros = 0
const listaPalavras = ['Kind', 'Apfel','Kinder', 'Frau', 'Tisch', 'Tasche', 'Mann', 'Buch', 'Mädchen']
palavra.textContent = listaPalavras[cont]

//adicionando eventos ao botões
botaoDer.addEventListener('click', () => {

    espaco.textContent = "der "

    for (n in refArtigos.der) {
        if (palavra.textContent == refArtigos.der[n]) {
            check = true
        }
    }
    checked()
    proximaPalavra()
})

botaoDie.addEventListener('click', () => {
    espaco.textContent = "die "
    for (n in refArtigos.die) {
        if (palavra.textContent == refArtigos.die[n]) {
            check = true

        }
    }
    checked()
    proximaPalavra()
})

botaoDas.addEventListener('click', () => {
    espaco.textContent = "das "
    for (n in refArtigos.das) {
        if (palavra.textContent == refArtigos.das[n]) {
            check = true

        }
    }
    checked()
    proximaPalavra()
})

modalBtn.addEventListener('click', () => {
    modal.classList.remove('modal-active')
})

// função de checagem 
function checked() {
    botaoDer.classList.add('btn-active')
    botaoDie.classList.add('btn-active')
    botaoDas.classList.add('btn-active')

    if (check) {
        underTitle.textContent = "Super! Das ist richtig :)"
        content.classList.add('acertou')
        richtig.textContent = ++acertos
    } else {
        underTitle.textContent = "Leider falsch :("
        content.classList.add('errou')
        falsch.textContent = ++erros
    }
}

// invocar próxima palavra
function proximaPalavra() {
    check = false
    cont = ++cont

    setTimeout(function () {
        if (cont == listaPalavras.length) {
            modal.classList.add('modal-active')
            modalRes.innerHTML = `Seu total de acertos foi:<strong> ${acertos}</strong> <br> Seu total de erros foi: <strong>${erros}</strong>`
            cont = 0
            acertos = 0
            erros = 0
            richtig.textContent = 0
            falsch.textContent = 0
        }
        reset()
    }, 3000)
}

// resetar os campos para a próxima rodada
function reset() {
    palavra.textContent = listaPalavras[cont]
    content.classList.remove('acertou')
    content.classList.remove('errou')
    underTitle.textContent = 'Weißt du es?'
    espaco.textContent = '_ _ _ '
    botaoDer.classList.remove('btn-active')
    botaoDie.classList.remove('btn-active')
    botaoDas.classList.remove('btn-active')
}