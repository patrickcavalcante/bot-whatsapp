import styled from 'styled-components'

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #efe7dd url('/assets/img/bg.jpg') repeat;
  z-index: 0;
  min-height: 85vh;
  padding: 1rem 0rem 6rem 0rem;
  min-width: 400px;
  margin-top: 4rem;

  @media only screen and (min-width: 700px) {
    display: flex;
    align-items: center;
    background: #efe7dd url('/assets/img/bg.jpg') repeat;
    z-index: 0;
    min-height: 86vh;
    padding: 1rem 0rem 6.5rem 0rem;
    width: 450px;
    margin-left: auto;
    margin-right: auto;
  }
`

export const Spancing = styled.div`
  padding: 20px 0px;
`
