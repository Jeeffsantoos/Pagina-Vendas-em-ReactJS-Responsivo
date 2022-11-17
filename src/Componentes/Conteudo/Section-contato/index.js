import './style.css';

function SecaoContato() {
  return (
    <section className='secao-contato' id="contato">
      <div className="limitar-secao">
        <h5 className="subtitles-general">FALE CONOSCO</h5>
        <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.
        </p>

        <div className='contato-list'>
          <div>
            <h6>Contato</h6>
            <div>
              <img src="assets/local.png" alt="" />
              <span>Nova Iguaçu, RJ</span>
            </div>
            <div>
              <img src="assets/telefone.png" alt="" />
              <span>(21) 9999-9999</span>
            </div>
            <div>
              <img src="assets/email.png" alt="" />
              <span>contato@oticavida.com</span>
            </div>
          </div>
          <div>
            <h6>Nossas Redes Sociais</h6>
            <div>
              <img src="assets/fb.png" alt="" />
              <span>/OticaVida</span>
            </div>
            <div>
              <img src="assets/ig.png" alt="" />
              <span>@oticavidarj</span>
            </div>
            <div>
              <img src="assets/tt.png" alt="" />
              <span>@oticavidarj</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecaoContato;