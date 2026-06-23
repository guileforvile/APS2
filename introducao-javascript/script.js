var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for ( let i = 0; i < pacientes; i++ ) { // let = variavel que pode sofrer mutação

    const paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoEhValido = true;
    var alturaEhValida = true;
    
    // JavaScript foi criado para VALIDAÇÃO
    if ( peso <= 0 || peso > 635 ) {
    
        console.log("Peso inválido!");
        pesoEhValido = false;
    
        tdImc.textContent = "Peso inválido!";
    }
    
    if ( altura < 0 || altura > 2.72 ) {
    
        console.log("Altura inválida!");
        alturaEhValida = false;
    
        tdAltura.textContent = "Altura inválida!";
    }
    
    if ( pesoEhValido && alturaEhValida ) {
    
        // var imc = peso/ Math.pow(altura, 2);
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;     // to.Fixed() para as casas decimais
    }
    
    if ( !pesoEhValido && !alturaEhValida ) {
    
        tdImc.textContent = "Peso e Altura inválido!"
    }
}

function calculaImc(peso, altura){

    var imc = 0;
    
    imc = peso/ Math.pow(altura, 2);
    
    return imc.toFixed(2);
}