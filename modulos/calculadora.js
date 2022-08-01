/*************************************************************************
 * Objetivo: Arquivo que contem todas as funcoes para calculos matematicos
 * Autor: Leonardo Moreira
 * Data Criacao: 01/08/2022
 * Versao: 1.0
 ************************************************************************/

//Metodo tradicional de se criar uma funcao 
//Formato menos utilizado no js
//function calcular(valor1, valor2, opcao) {
    //Criando variaveis locais para receber o conteudo dos argumentos
    // que foram encaminhados na function  
    /*let numero1 = valor1
    let numero2 = valor2
    let operacao = opcao.toUpperCase();
    let resultado;
    let erro = false
    switch (operacao) {
        case 'SOMAR': case '+':
            return numero1 + numero2;
        case 'SUBTRAIR': case '-':
            return numero1 - numero2;
        case 'MULTIPLICAR': case '*':
            return numero1 * numero2;
        case 'DIVIDIR': case '/':
            if (numero2 == 0) {
                console.log = 'ERRO: Nao e possivel realizar a realizar a divisao por 0'
                erro = true
                return false;
            }
            else
                return numero1 / numero2;
        default:
            console.log = 'ERRO: Nao foi escolhido uma operacao valida'
            erro = true;
            return false;
    }

}*/
//Metodo de criacao de funcao utilizando o padrao de call back
//Formato mais utilizado no js
const calcular = function(valor1, valor2, opcao){
    let numero1 = valor1
    let numero2 = valor2
    let operacao = opcao.toUpperCase();
    let resultado;
    let erro = false
    switch (operacao) {
        case 'SOMAR': case '+':
            return numero1 + numero2;
        case 'SUBTRAIR': case '-':
            return numero1 - numero2;
        case 'MULTIPLICAR': case '*':
            return numero1 * numero2;
        case 'DIVIDIR': case '/':
            if (numero2 == 0) {
                console.log = 'ERRO: Nao e possivel realizar a realizar a divisao por 0'
                erro = true
                return false;
            }
            else
                return numero1 / numero2;
        default:
            console.log = 'ERRO: Nao foi escolhido uma operacao valida'
            erro = true;
            return false;
     }

   }


module.exports = { calcular }

// As funcoes que seram importadas em outros projetos, prescisam abrigatodtuaente 
//serem incluidas no module.exports.
//As funcoes que nao incluidas no module.exports, ela iria funcionar
//apenas localmente neste arquivo 