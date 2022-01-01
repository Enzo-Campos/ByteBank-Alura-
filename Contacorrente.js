import { Operações } from "./Operações.js";

export class ContaCorrente extends Operações {
    static numeroDeContas = 0;

    constructor(agencia, cliente) {
        super(agencia, cliente)
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        let taxa = 1.2
        return this._sacar(valor, taxa)
    }

    transferir(valor, conta){
        let taxa = 1.2
        return this._transferir(valor, conta, taxa)
    }
}


//_cliente; Até agora conta corrente só tem agencia e saldo, e não um conta espeficico, então declaramos cliente;

// set cliente(novoValor) { // mude o valor de cliente somente se o novoValor passado for uma instancia de Class Cliente
//     if (novoValor instanceof Cliente) {
//         this._cliente = novoValor;
//     }
// }

// get cliente() {
//     return this._cliente;
// }

// get saldo() { //getter apenas permite que o valor seja recebido e não alterado
//     return this._saldo;
// }


//sacar(valor) {
//     if (this._saldo >= valor) {
//         this._saldo -= valor;
//         return valor;
//     } else {
//         console.log('Saldo insufíciente');
//     }
// }

// depositar(valor) {
//     if (valor > 0) {
//         this._saldo += valor;
//     } else {
//         console.log('O valor depositado precisa ser maior que zero');
//     }
// }

// transferir(valor, conta) { // Dois parametros pois irei transferir um VALOR para uma CONTA
//     const valorASerTransferido = this.sacar(valor); // O valor a ser transferido é o saque do VALOR da conta 
//     conta.depositar(valorASerTransferido); // A transferencia é finalizada quando se DEPOSITA o direito, logo, depoistar (valorASerTransferido)
// }