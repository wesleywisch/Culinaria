import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --green: green;
    --red: red;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  
  body {
    background: #fff;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  html{
    @media (max-width: 1080px){
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px){
      font-size: 87.5%; // 14px
    }
  }

  .react-modal-overlay{
    background: rgba(0,0,0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 900px;
    max-width: 576px;
    background: #333;
    padding: 3rem;
    position: relative;
    border-radius: 0.8rem;

    .modalAdd{
      p{
        color: #f5f5f5;
      }

      .cabecario{
        display: flex;
        justify-content: space-between;

        img{
          width: 28px;
          cursor: pointer;
        }
      }

      .campoText{
        margin-top: 1.5rem;
        width: 100%;

        #title::placeholder{
          color: #FF5252;
        }

        #ingredients::placeholder{
          color: #FF5252;
        }

        #instructions::placeholder{
          color: #FF5252;
        }

        #imagem::placeholder{
          color: #FF5252;
        }

        input{
          width: 100%;
          height: 30px;
          font-size: 1.5rem;
          border: none;
          background-color: transparent;
          margin: 12px 0;
          padding: 22px 8px;
          color: #f8f8f8;
          border-bottom: 2px solid green;
        }

        textarea{
          resize: none;
          width: 100%;
          height: 120px;
          font-size: 1.5rem;
          border: none;
          color: #f8f8f8;
          background-color: transparent;
          margin: 12px 0;
          padding-top: 0;
          padding-bottom: 22px;
          padding-left: 8px;
          padding-right: 8px;
          border-bottom: 2px solid green;
        }
      }

      .react-modal-close{
        background-color: var(--green);
      }
    }

    .modalEdit{

      .cabecario{
        display: flex;
        justify-content: space-between;

        h3{
          font-size: 1.4rem;
        }

        img{
          width: 28px;
          cursor: pointer;
        }
      }

      p{
        color: #f5f5f5;
        margin-top: 2rem;
      }

      .content{
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 1.5rem 0;
        height: 340px;

        textarea{
          resize: none;
          background-color: transparent;
          border: none;
          font-size: 1.3rem;
          padding: 12px;
          color: #f8f8f8;
        }

        img{
          width: 240px;
        }

      }

      .instructions{
        width: 100%;

        p{
          color: #f5f5f5;
          margin-bottom: 2rem;
        }

        textarea{
          width: 100%;
          resize: none;
          background-color: transparent;
          border: none;
          font-size: 1.3rem;
          color: #f8f8f8;
        }
      }

      .react-modal-close{
        background-color: var(--red);
      }
    }
  }

  .react-modal-close{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    position: absolute;
    left: 2.5rem;
    bottom: 1rem;
    border: 0;
    background: #FFF;
    padding: 0.5rem;
    font-size: 1rem;
    color: #f8f8f8;
    border-radius: 2rem;
    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.8);
    }

    img{
      width: 18px;
    }
  }

  @media screen and (max-width: 600px){
    .react-modal-content{
      max-width: 320px;

      .modalEdit{
        .content{
          grid-template-columns: 1fr;
        }
      }
    }
  }
`;