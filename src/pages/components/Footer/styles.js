import styled from 'styled-components'

export const BgFooter = styled.div`
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 8vh;
  padding:1rem 0;
`

export const GridContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const IconPlus = styled.img`
  height: 24px;
  width: 24px;
`

export const IconUpload  = styled.img`
  width: 24px;
  margin-left: 15px;
`

export const IconSend  = styled.img`
  width: 24px;
  margin-left: 15px;
`

export const IconMicro  = styled.img`
  width: 24px;
  margin-left: 15px;
`

export const Input = styled.input`
  padding: 10px 10px;
  border-radius: 30px;
  border: solid 1px #e0e0e0;
  margin-left: 10px;
  width: 255px;
  margin-left: 15px;
  font-size: 16px;
  outline: none;

  @media only screen and (min-width: 700px) {
    width: 290px;
  }
`



