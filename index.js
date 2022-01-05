import { Cliente } from "./Clientex.js";
import { Gerente } from "./Funcionarios/gerente.js"
import { Diretor } from "./Funcionarios/diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor ('Rodrigo', 10000, 773663801);
diretor.cadastrarSenha(123456)
const gerente = new Gerente ('Ricardo', 5000, 522493302);
gerente.cadastrarSenha(123)

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const cliente = new Cliente ('Lais', 83772514178, 456)

const clienteEstaLogado = SistemaAutenticacao.login(cliente, 456)
console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado)



