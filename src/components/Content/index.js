import { useState } from 'react';

import { Container } from './styles';

export function Main() {
  const [favorito, setFavorito] = useState(false);

  return (
    <Container>
      <div className="group">
      <div className="left">
        <h2>Todas as receitas</h2>
      </div>

      <section className="pesquisar">
        <form>
          <button><img src="/assests/pesquisar.png" alt="Pesquisar" /></button>
          <input placeholder="Pesquisar" type="text" />
        </form>


        <div className="add">
          <button>Adicionar nova receita</button>
        </div>
      </section>
      </div>


      <section className="sectionCards">
        <div className="card">
          <img src="https://i.pinimg.com/564x/7f/87/38/7f87388e189bacddaf1b1cb856404d30.jpg" alt="" />
          <h3>Title</h3>
          <hr />
          <div>
            <button className="receita">Abrir receita</button>
            {favorito ? (
              <button onClick={() => setFavorito(false)}><img src="/assests/favorito.png" alt="" /></button>
            ) : (
              <button onClick={() => setFavorito(true)}><img src="/assests/naoFavorito.png" alt="" /></button>
            )}
          </div>
        </div>
      </section>

      <footer>
        <h2>Seus segredos culinários estão guardados</h2>
        <img src="/assests/cookbook.png" alt="" />
      </footer>

    </Container>
  )
}