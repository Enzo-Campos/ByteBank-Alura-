
import { ContaCorrente } from "./Contacorrente.js";
import { Cliente } from "./Clientex.js";
import { ContaPoupança } from "./ContaPoupança.js";
import { Operações } from "./Operações.js";

const cliente1 = new Cliente('Ricardo', 11122233309);

const cliente2 = new Cliente('Alice', 99887776501);

const cliente3 = new Cliente('Carlos', 2999378392);

const cliente4 = new Cliente('Julian', 9992773823);

const cliente5 = new Cliente('Abreu', 99388484)

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);//conta do ricardo é uma nova conta corrente porém não tem dono, logo declaramos um client;
const contaCorrenteAlice = new ContaCorrente(1001, cliente2);
const contaCorrenteCarlos = new ContaCorrente(1001, cliente3);
const contaCorrenteJulian = new ContaCorrente(1001, cliente4);
const contaCorrenteAbreu = new ContaCorrente(1001, cliente5)

const contaPoupançaRicardo = new ContaPoupança(1001,cliente1);
const contaPoupançaAlice = new ContaPoupança (1001,cliente2);
const contaPoupançaCarlos = new ContaPoupança(1001,cliente3);
const contaPoupançaJulian = new ContaPoupança(1001,cliente4)
const contaPoupançaAbreu = new ContaPoupança(1001,cliente5)

contaPoupançaRicardo.depositar(800)
contaCorrenteRicardo.depositar(800);
contaCorrenteRicardo.transferir(400, contaPoupançaRicardo)
// contaPoupançaRicardo.transferir(400, contaCorrenteAlice)
// contaCorrenteAlice.transferir(400, contaPoupançaAlice)

// console.log(contaCorrenteRicardo); 
// console.log(contaPoupançaRicardo);
// console.log(contaCorrenteAlice);
// console.log(contaPoupançaAlice);
// console.log(contaCorrenteCarlos);
// console.log(contaPoupançaCarlos);
// console.log(contaCorrenteJulian);
// console.log(contaPoupançaJulian);
// console.log(contaCorrenteAbreu);
// console.log(contaPoupançaAbreu);
// console.log(ContaCorrente.numeroDeContas);
// console.log(ContaPoupança.numeroDeContasPoupanca);
console.log(contaPoupançaRicardo)
console.log(contaCorrenteRicardo)
