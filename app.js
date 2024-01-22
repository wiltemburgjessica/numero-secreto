let numeroSorteados = [];
let numeroLimite = 50;
let numeroSecreto = numeroAleatorio();
let tentativa = 1;

function titulo(tag, texto) {
    let nome = document.querySelector(tag);
    nome.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial() {
    titulo('h1', 'Jogo do numero secreto');
    titulo('p', 'digite um numero de 1 a 100');   
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        titulo('h1', 'Parabéns!!!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você acetou com ${tentativa} ${palavraTentativa} miseravel : ]`;
        titulo('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            titulo('p', 'Erroouuu!! Esse numero é maior');
        } else{
            titulo('p', 'Erroouuu!! Esse numero é menor');
        }
        tentativa++;
        limparCampo();
    }
}

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = numeroSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) {
        numeroSorteados = [];
    }
        
    
    if (numeroSorteados.includes(numeroEscolhido)) {
        return numeroAleatorio();
    } else {
        numeroSorteados.push(numeroEscolhido);
        console.log (numeroSorteados);
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    limparCampo();
    numeroSecreto = numeroAleatorio();
    tentativa = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}