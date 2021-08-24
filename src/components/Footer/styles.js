import styled from "styled-components";

export const Container = styled.footer`
margin-top: 6rem;
display: flex;
width: 100%;
height: 180px;
justify-content: space-around;
align-items: center;
background-color: #333;

  h2{
    font-size: 3rem;
  }

  img{
    width: 150px;
    height: 150px;
  }

@media screen and (max-width: 1200px){
  h2{
    margin-left: 0.5rem;
  }
}

@media screen and (max-width: 745px){
  h2{
    font-size: 2rem;
  }
}

@media screen and (max-width: 525px){
  h2{
    font-size: 1.4rem;
  }
}
`;