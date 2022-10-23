import styled from 'styled-components'

export const BgFooter = styled.div`
  background-color: transparent;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

export const GridContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 8vh;
  padding:0rem 1.3em;
  background-color: #f6f6f6;
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

export const ContentAndroid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  weight: 300px;
  background-color: transparent;
  margin-right: 20px;
`

export const GridContentAndroid = styled.div`
  display: flex;
  flex-direction: row;
  height: 6vh;
  background-color: transparent;
  min-width: 250px;
`

export const InputAndroid = styled.input`
  border-radius: 30px;
  border: solid 1px #e0e0e0;
  margin-left: 10px;
  width: 320px;
  margin-left: 10px;
  font-size: 15px;
  outline: none;
  font-weight: 400;
  padding: 10px 10px 10px 50px;

  @media only screen and (min-width: 700px) {
    width: 360px;
  }
`
export const MicrophoneContent = styled.div`  
  background-color: #075e54;
  width: 40px;
  height: 40px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 35px;
  margin-right: -30px
`

export const MicrophoneIcon = styled.img`
  width: 24px;
  height: 24px;
`

export const Smile = styled.img`
  width: 24px;
  height: 24px;
  margin-right: -45px;
  z-index: 2;
  margin-top: 8px;
`

export const PaperClipContent = styled.div`
  width: 24px;
  height: 24px;
  margin-left: -80px;
  margin-right: 10px;
  z-index: 2;
  margin-top: 8px;
`

export const PhotoCamConten = styled.div`
  width: 22px;
  height: 22px;
  margin-left: 0px;
  z-index: 2;
  margin-top: 8px;
`

export const PaperClip = styled.img`
  width: 24px;
  height: 24px;
  margin-left: -80px;
  margin-right: 10px;
  z-index: 2;
  margin-top: 8px;
`

export const PhotoCam = styled.img`
  width: 22px;
  height: 22px;
  margin-left: 0px;
  z-index: 2;
  margin-top: 8px;
`


