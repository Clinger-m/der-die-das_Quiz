
// pegando os botões

const botaoDer = document.getElementById('der')
const botaoDie = document.getElementById('die')
const botaoDas = document.getElementById('das')
const content = document.getElementById('content')
const underTitle = document.getElementById('under-title')
const espaco = document.getElementById('espaco')
const richtig = document.getElementById('richtig')
const palavra = document.getElementById('palavra')


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
const teste = ['Kind', 'Apfel', 'Kinder', 'Frau', 'Tisch', 'Tasche', 'Mann', 'Buch', 'Mädchen']
palavra.textContent = teste[cont]

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

// função de checagem 
function checked() {
    botaoDer.classList.add('active')
    botaoDie.classList.add('active')
    botaoDas.classList.add('active')

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
        if (cont == teste.length) {
            alert(`Parabéns! Você concluiu o desafio! Seu total de acertos foi ${acertos} e o total de erros foi ${erros}`)
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
function reset(){
    palavra.textContent = teste[cont]
    content.classList.remove('acertou')
    content.classList.remove('errou')
    underTitle.textContent = 'Weißt du es?'
    espaco.textContent = '_ _ _ '
    botaoDer.classList.remove('active')
    botaoDie.classList.remove('active')
    botaoDas.classList.remove('active')
}