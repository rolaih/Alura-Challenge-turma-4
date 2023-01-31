var entrada = document.getElementById('entrada');
var saida = document.getElementById('saida');

var criptografar = document.getElementById("btn-criptografar");
var descriptografar = document.getElementById("btn-descriptografar");
var copiarTexto = document.getElementById("copiar");

criptografar.addEventListener('click', () =>{
    saida.textContent = encryptText(getText());
})

descriptografar.addEventListener('click', () => {
    saida.textContent = desencryptText(getText());
})


copiarTexto.addEventListener('click', () => {
    saida.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(saida.value);
    document.getElementById("copiar").innerHTML = "Copiado!";

})


function getText(){
    var texto = document.getElementById("entrada");
    return texto.value;
}
function encryptText(message){
    var text = message;
    var textResult = "";

    for(var i = 0; i < text.length; i++){
        if(text[i] == "a"){
            textResult = textResult + "ai"
        }
        else if(text[i] == "e"){
            textResult = textResult + "enter"
        }
        else if(text[i] == "i"){
            textResult = textResult + "imes"
        }
        else if(text[i] == "o"){
            textResult = textResult + "ober"
        }
        else if(text[i] == "u"){
            textResult = textResult + "ufat"
        }
        else{
            textResult = textResult + text[i];
        }
    }
    return textResult;
}
function desencryptText(message){
    var text = message;
    var textResult = "";

    for(var i = 0; i < text.length; i++){
        if(text[i] == "a"){
            textResult = textResult + "a"
            i = i+ 1;
        }
        else if(text[i] == "e"){
            textResult = textResult + "e"
            i = i + 4;
        }
        else if(text[i] == "i"){
            textResult = textResult + "i"
            i = i + 3;
        }
        else if(text[i] == "o"){
            textResult = textResult + "o"
            i = i + 3;
        }
        else if(text[i] == "u"){
            textResult = textResult + "u"
            i = i + 3;
        }
        else{
            textResult = textResult + text[i];
        }
    }
    return textResult;
}




setInterval(function verificarSeHaOutput() {
    let comOutput = document.getElementById('resultado-textarea');
    let semOutput = document.getElementById('resultado');

    if (saida.value == "") {
        comOutput.style.display = 'none';
        semOutput.style.display = 'flex';
    } else {
        comOutput.style.display = 'flex';
        semOutput.style.display = 'none';
    }
})