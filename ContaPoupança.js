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
        let taxa = 1.3
        return this._sacar(valor, taxa)
    }

    transferir(valor,conta){
        let taxa = 1.3
        return this._transferir(valor,conta, taxa)
    }
}