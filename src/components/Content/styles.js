import styled from "styled-components";

export const Container = styled.main`
.group{
  display: grid;
  grid-template-columns: 0.4fr 1fr;

  .left{
    max-width: 320px;
    width: 100%;
    height: 36px;
    margin: 4rem 2rem;
    display: flex;

    h2{
      color: #333;
      font-size: 2.5rem;
    }
  }

  .pesquisar{
    display: flex;
    justify-content: space-between;
    margin: 4rem 2rem;

    form{
      display: flex;
      padding: 0.4rem 1rem;
      max-width: 680px;
      width: 100%;
      align-items: center;
      border: 1px solid #333;
      border-radius: 1.8rem;
    }

    button{
      border: none;
      background: none;

      img{
        width: 28px;
      }
    }

    input{
      font-size: 1.3rem;
      border: none;
      outline: none;
      height: 100%;
      width: 100%;
      padding-left: 1rem;
    }

    .add{
      display: flex;
      background-color: green;
      border-radius: 8rem;

      button{
        color: #f5f5f5;
        font-size: 1rem;
        padding: 1rem;
        transition: filter 0.5s;

        &:hover{
          filter: brightness(0.8);
        }
      }
    }
  }
}

.sectionCards{
  display: grid;
  margin: 2rem 3rem;
  grid-template-columns: repeat(4, 1fr);
  gap: 62px;

  .card{
    margin: 0 auto;
    background-color: gray;
    max-width: 280px;
    border-radius: 0.8rem;
    -webkit-box-shadow: 0px 0px 17px -2px rgba(0,0,0,0.63); 
    box-shadow: 0px 0px 17px -2px rgba(0,0,0,0.63);

    img{
      max-width: 280px;
      border-radius: 0.8rem 0.8rem 0 0;
    }

    hr{
      border: 1px solid #000;
    }

    h3{
      text-align: center;
      font-size: 1.8rem;
    }

    div{
      display: flex;
      justify-content: space-between;

      .receita{
        max-width: 120px;
        width: 100%;
        height: 40px;
        margin: 0.5rem;
        border-radius: 2rem;
        border: none;
        background-color: green;
        color: #f5f5f5;
        font-size: 1rem;
      }

      button{
        margin: 0.5rem;
        background-color: transparent;
        border: none;
      }
    }
  }
}

footer{
  margin-top: 8rem;
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
}


@media screen and (max-width: 1550px){
  .group{
  .pesquisar{
    form{
      max-width: 580px;
    }
  }
}
}

@media screen and (max-width: 1500px){
  .sectionCards{
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 1440px){
  .group{
  .pesquisar{
    form{
      max-width: 480px;
    }
  }
}
}

@media screen and (max-width: 1322px){
  .group{
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;

  .left{
    margin: 1rem auto;
  }

  .pesquisar{
    justify-content: space-around;
    margin: 1rem 2rem;
  }
}
}

@media screen and (max-width: 1200px){
  .sectionCards{
    grid-template-columns: repeat(2, 1fr);
  }

  footer{
    h2{
      margin-left: 0.5rem;
    }
  }
}

@media screen and (max-width: 790px){
  .sectionCards{
    margin: 1rem auto;
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 745px){
  .group{
  .pesquisar{
    form{
      max-width: 280px;
    }
  }
}

footer{
  h2{
    font-size: 2rem;
  }
}
}

@media screen and (max-width: 525px){
  .group{
  .left{
    display: flex;
    justify-content: center;
  }

  .pesquisar{
    margin: 0;
    display: block;

    form{
      margin: 0 auto;
      max-width: 380px;
    }

    .add{
      margin: 1rem auto;
      max-width: 180px;
    }
  }
}

footer{
  h2{
    font-size: 1.4rem;
  }
}
}

@media screen and (max-width: 424px){
  .group{
  .pesquisar{
    form{
      max-width: 280px;
    }
  }
}
}

`;