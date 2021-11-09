function exibirDataHora(){
    document.getElementById('relogio').innerHTML = Date();
}
function exibirMensagem(){
    document.getElementById('mensagem').innerHTML = 'Uma Super Mensagem!';
}

function alternarDataHoraPorMensagem(){
    
    var auxiliar = document.getElementById('relogio').innerHTML; 
    
    document.getElementById('relogio').innerHTML = document.getElementById('mensagem').innerHTML;
    
    document.getElementById('mensagem').innerHTML = auxiliar;
}

var personagem = true; 

function trocarPersonagem(){
    
    if (personagem) {
        document.getElementById('personagem').src = "img/yogitocat.png";
    } else {
        document.getElementById('personagem').src = "img/madruga.jpg";
    }
    personagem = !personagem; 
}