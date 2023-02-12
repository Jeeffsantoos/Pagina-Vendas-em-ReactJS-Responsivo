import './style.css';

function SecaoProdutos() {
  return (
    <section className="secao-produtos" id='produtos'>
      <div className="limitar-secao">
        <div>
          <h2 className="subtitles-general">NOSSOS PRODUTOS</h2>
          <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
          <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
        </div>
        <div className='produtos-cards'>
          <div className='produtos-cards-each'>
            <h2>Óculos de grau</h2>
            <img src="assets/oculos01.png" alt="" />
            <p>R$ 500,00</p>
          </div>
          <div className='produtos-cards-each'>
            <h2>Óculos transition</h2>
            <img src="assets/oculos02.png" alt="" />
            <p>R$ 750,00</p>
          </div>
          <div className='produtos-cards-each'>
            <h2>Óculos de sol</h2>
            <img src="assets/oculos03.png" alt="" />
            <p>R$ 700,00</p>
          </div>
          <div className='produtos-cards-each'>
            <h2>Óculos infantil</h2>
            <img src="assets/oculos04.png" alt="" />
            <p>R$ 500,00</p>
          </div>
        </div>
        <div>
          <p>Todos os nossos produtos incluem:</p>
          <ul>
            <li>Garantia de 1 ano</li>
            <li>Manutenção preventiva</li>
            <li>Descontos especiais na compra da segunda unidade</li>
            <li>Flexibilidade de pagamento</li>
          </ul>
        </div>
      </div>

    </section>
  );
}
export default SecaoProdutos;