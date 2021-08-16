
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <div className="container">
        <h1>Culinária</h1>

        <div>
          <button>Nova receita</button>
        </div>
      </div>
    </Container>
  );
}