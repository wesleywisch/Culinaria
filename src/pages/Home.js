import { Main } from "../components/Content";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import { Container } from './styles';

export function Home(){
  return(
    <Container>
      <Sidebar />
      <Header />
      <Main />
    </Container>
  );
}