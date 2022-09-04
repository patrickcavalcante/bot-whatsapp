import styled from 'styled-components'

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #efe7dd url('/assets/img/bg.jpg') repeat;
  z-index: 0;
  min-height: 85vh;
  max-height: 85vh;
  padding: 0rem;
  overflow: hidden;
  overflow-y: auto;
  min-width: 400px;
  margin-top: 4rem;

  @media only screen and (min-width: 700px) {
    display: flex;
    align-items: center;
    background: #efe7dd url('/assets/img/bg.jpg') repeat;
    z-index: 0;
    min-height: 86vh;
    max-height: 86vh;
    padding: 1rem 0;
    width: 450px;
    margin-left: auto;
    margin-right: auto;
  }
`
