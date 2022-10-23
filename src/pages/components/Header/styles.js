import styled from 'styled-components'

export const BgHeader = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 8vh;
  padding: 0rem 1em;
  background-color: #f6f6f6;
`

export const ContentAndroid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 8vh;
  padding: 0rem 1.3em;
  background-color: #075e54;
`

export const GridContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const GridContentIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 110px;

  @media only screen and (min-width: 700px) {
    width: 110px;
  }
`

export const Title = styled.h2`
  margin: 0px;
  font-weight: 700;
  color: #000000;
  font-size: 17px;
  width: 215px;
  margin-left: 13px;

  @media only screen and (min-width: 700px) {
    width: 250px;
  }
`

export const TitleWhite = styled.h2`
  margin: 0px;
  font-weight: 400;
  color: #ffffff;
  font-size: 17px;
  width: 180px;
  margin-left: 13px;

  @media only screen and (min-width: 700px) {
    width: 200px;
  }
`

export const ActiveStatusWhite = styled.h5`
  font-size: 16px;
  font-weight: 300;
  margin: 0px;
  margin-left: 15px;
  margin-top: 3px;
  color: #ffffff
`

export const Arrow = styled.img`
  height: 28px;
  width: 28px;
`

export const ArrowWhite = styled.img`
  height: 20px;
  width: 20px;
  margin-left: 5px;
  margin-right: 5px;
`

export const Logo = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 30px;
  margin-left: 5px;
`

export const Tell = styled.img`
  height: 24px;
  width: 24px;
  margin-left: 15px;
`

export const TellWhite = styled.img`
  height: 20px;
  width: 20px;
  margin-left: 15px;
`

export const Movie = styled.img`
  height: 28px;
  width: 28px;
`

export const MovieWhite = styled.img`
  height: 38px;
  width: 38px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const ActiveStatus = styled.h5`
  font-size: 16px;
  font-weight: 300;
  margin: 0px;
  margin-left: 30px;
`

export const Status = styled.div`
  background: green;
  width: 10px;
  height: 10px;
  margin-top: -13px;
  margin-left: 13px;
  border-radius: 50%;
`
