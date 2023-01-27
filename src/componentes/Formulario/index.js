import "./Formulario.css";
import "../CampoTexto";

import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
const Formulario = () => {

  const times = [
    'Team Liquid',
    'Team Loud',
    'Team ODDK',
    'Ferinhas do Teclado',
    '100org',
    'aaa',
    'bbb'
  ]

  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('Form foi submetido')
  }
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do jogador</h2>
        <CampoTexto obrigatorio={true} label="Nickname" placeholder="Digite o nickname" />
        <CampoTexto obrigatorio={true} label="Função" placeholder="Digite a funcionalidade" />
        <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
