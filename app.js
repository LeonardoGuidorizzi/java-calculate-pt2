console.log('Calculadora Simples');

const { exit } = require('process');

const { calcular } = require('./modulos/calculadora')

//import da biblioteca da entrda de dados 
var readLine = require('readline')

var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o numero1:\n', function (valor1) {
    //declarando a variavel e convertendo o valor digitado pelo usuario em float
    let numero1 = parseFloat(valor1);

    //typeof= mostra qual e o tipo da variavel ou um objeto
    //cosole.log(typeof(numero1));

    entradaDados.question('Digite o numero2:\n', function (valor2) {
        let numero2 = parseFloat(valor2);

        //verificacao de string ou number
        //isNaN: quando nao e numero

        if (isNaN(numero1) || isNaN(numero2)) {
            console.log('Erro: somente numeros para a executar o programa')
            exit()
        } else {
            entradaDados.question('Escolha a operacao a ser calculada: somar [+], subtrair [-], multiplicar[*], dividir[/]', function (opcao) {
                let operacao = opcao.toUpperCase();

                let resultado;
                //Chama a funcao que realiza os calculos matematicos
                if (resultado = calcular(numero1, numero2, operacao)) {
                    console.log('O resulatado e igual a ' + resultado)
                    exit()
                }
                
            });
        }
    });
});



