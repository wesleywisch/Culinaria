import { Container } from './styles';

import { Link } from 'react-router-dom';

export function Header() {

  return (
    <Container>
      <div className="container">
        <h1>Culinária</h1>

        <div className="menu-section">
          <nav className="menu">
            <ul>
              <li><Link to="#">Home</Link></li>
              <li><Link to="#">Favoritos</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="segredos">
        <h2>Segredos de<br /> cozinha</h2>
        <img src="/assests/cozinhando.png" alt="Livro de culinária" />
      </div>
    </Container>
  )
}