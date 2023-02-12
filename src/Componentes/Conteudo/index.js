import SecaoBanner from './Section-banner/';
import SecaoProdutos from './Section-produtos';
import SecaoSobre from './Section-Sobre';
import SecaoContato from './Section-contato';

function Conteudo() {
  return (
    <main>
      <SecaoBanner />
      <SecaoProdutos />
      <SecaoSobre />
      <SecaoContato />
    </main>
  );
}

export default Conteudo;