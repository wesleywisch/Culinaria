import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.6fr repeat(3, 1fr);
  grid-template-rows: 0.2fr 3fr;
  grid-template-areas: 'sidebar nav nav nav'
                       'sidebar main main main';

@media only screen and (max-width: 978px){
  .container{
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 3fr;
    grid-template-areas: 'nav' 'main';
  }
}
`;