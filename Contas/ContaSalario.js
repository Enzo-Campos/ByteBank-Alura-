import { Operações } from "./Operações.js";

export class ContaSalario extends Operações{
    constructor(cliente){
        super(1001,cliente)
    }

   sacar(valor){
       const taxa= 1.01;
       return this._sacar(valor, taxa);
   }
}