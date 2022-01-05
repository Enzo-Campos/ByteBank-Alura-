import { Operações } from "./Operações.js";

export class ContaPoupança extends Operações{
    static numeroDeContasPoupanca = 0;
    constructor (agencia, cliente, saldoInicial){
        super(agencia,cliente);
        saldoInicial = 0;
        this._saldo = saldoInicial;
        ContaPoupança.numeroDeContasPoupanca += 1;
    }

    sacar(valor){
        let taxa = 1.4
        return this._sacar(valor, taxa)
    }

    transferir(valor,conta){
        return this._transferir(valor,conta)
    }
}