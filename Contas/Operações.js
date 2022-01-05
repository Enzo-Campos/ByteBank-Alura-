import { ContaCorrente } from "./Contacorrente.js";
//CLASSE ABSTRATA Operações.js:24
export class Operações {

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(agencia, cliente) {
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = 0;
        if (this.constructor == Operações){
            throw new Error ('Você não deveria instanciar um valor à propriedade Conta')
        }
    }

    sacar(valor){
        throw Error ('teste')
    }

    _sacar(valor, taxa) {
        const valorSacado = valor * taxa
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        } else {
            console.log('Saldo insufíciente');
        }
    }

    _sacarTransferencia(valor){
        const valorSacado = valor
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        } else {
            console.log('Saldo insufíciente');
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
        }
    }

    transferir(valor,conta){
     throw Error ('teste 2')
    }

    _transferir(valor, conta, taxa ) { // Dois parametros pois irei transferir um VALOR para uma CONTA
        const valorASerTransferido = this._sacarTransferencia(valor); // O valor a ser transferido é o saque do VALOR da conta 
        conta.depositar(valorASerTransferido); // A transferencia é finalizada quando se DEPOSITA o dinheiro, logo, depositar (valorASerTransferido)
    }
}