import styled from "styled-components";

export const Container = styled.header`
  background-color: #fdbc2e;
  height: 450px;
  border-radius: 0 0 1.8rem 1.8rem;

.container{
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1580px;
  width: 100%;
  margin: auto;

  h1{
    color: #000;
    font-size: 3rem;
    margin-left: 4%;
    padding: 15px 0;
  }

  nav ul{
    display: flex;
  }

  nav ul li{
    list-style: none;
  }

  nav ul li a{
    text-decoration: none;
    color: #f5f5f5;
    font-weight: 900;
    font-size: 1.2em;
    padding: 24px;
    transition: all 250ms linear 0s;
  }

  nav ul li a:hover{
    background: rgba(0, 0, 0, 0.15);
  }
}

.segredos{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1.5rem 1.5rem;

  h2{
    text-align: center;
    font-size: 4.5rem;
    color: #000;
  }

  img{
    width: 260px;
  }
}

@media screen and (max-width: 474px){
  .container{
    h1{
      font-size: 2rem;
    }
  }
}

@media screen and (max-width: 764px){
  height: 350px;

  .segredos{
  h2{
    font-size: 2.5rem;
  }

  img{
    width: 150px;
  }
}
}

@media screen and (max-width: 500px){
  height: 450px;

  .segredos{
    display: block;
    text-align: center;

  h2{
    font-size: 2.5rem;
  }

  img{
    margin: 1rem 0;
    width: 150px;
  }
}
}

@media screen and (max-width: 374px){
  .container{
    h1{
      font-size: 1.5rem;
    }

    nav ul li a{
      font-size: 0.8rem;
    }
  }
}
`;