import styled from 'styled-components'

export const BotMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: -80px;
  margin-top: 15px;
  max-width: 300px;
` 

export const BotMessageBalloon = styled.div`
  width: 280px;
  margin: 2px auto;
  background: #fff;
  padding: 20px;
  text-align: left;
  border-radius: 0px 10px 10px 10px;
  font-weight: 900;
  color: black;
  font-family: arial;
  position:relative;
  -webkit-animation-name: fadeInLeft;
  -moz-animation-name: fadeInLeft;
  -o-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  -o-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-duration: 0.2s;
  -moz-animation-duration: 0.2s;
  -o-animation-duration: 0.2s;
  animation-duration: 0.2s;
  -webkit-animation-delay: 0.2s;
  -moz-animation-delay: 0.2s;
  -o-animation-duration: 0.2s;
  animation-delay: 0.2s;

  @keyframes fadeInLeft {
    from {
        opacity:0;
        -webkit-transform: translatex(-30px);
        -moz-transform: translatex(-30px);
        -o-transform: translatex(-30px);
        transform: translatex(-30px);
    }
    to {
        opacity:1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
    }
  }

  &:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid #fff;
    border-top: 10px solid #fff;
    border-bottom: 10px solid transparent;
    left: -19px;
    top: 6px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
` 

export const ContainerCollum = styled.div`
  display: flex;
  flex-direction: column;
`

export const BotMessageImage = styled.img`
  width: 32px;
  height: 32px;
  border: solid 1px #e0e0e0;
  border-radius: 30px;
`

export const Title = styled.p`
  margin: 0px;
  font-size: 14px;
  font-weight: 700;
  color: #444;
  margin-left: 15px;
`

export const Subtitle = styled.span`
  margin: 0px;
  font-size: 10px;
  font-weight: 400;
  color: #444;
  margin-left: 15px;
  margin-top: 5px;
`

export const Divisor = styled.hr`
  border: solid 0.5px #e0e0e0;
  height: 1px;
`

export const Link = styled.a`
  font-size: 10px;
  font-weight: 300;
  color: #444;
`

export const Separator = styled.div`
  border-left: solid 2px #e0e0e0;
`

export const Text = styled.p`
  margin: 0px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5rem;
  color: #444;
`

export const ClientMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  margin-right: -120px;
  margin-top: 5px;
`

export const ClientMessageBalloon = styled.div`
  width: 250px;
  margin: 10px;
  background: #d9fdd3;
  padding: 20px;
  text-align: left;
  border-radius: 10px 0px 10px 10px;
  font-weight: 900;
  color: black;
  font-family: arial;
  position:relative;
  -webkit-animation-name: fadeInRight;
  -moz-animation-name: fadeInRight;
  -o-animation-name: fadeInRight;
  animation-name: fadeInRight;
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  -o-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-duration: 0.2s;
  -moz-animation-duration: 0.2s;
  -o-animation-duration: 0.2s;
  animation-duration: 0.2s;
  -webkit-animation-delay: 0.2s;
  -moz-animation-delay: 0.2s;
  -o-animation-duration: 0.2s;
  animation-delay: 0.2s;

  @keyframes fadeInRight {
    from {
        opacity:0;
        -webkit-transform: translatex(100px);
        -moz-transform: translatex(100px);
        -o-transform: translatex(100px);
        transform: translatex(100px);
    }
    to {
        opacity:1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
    }
  }

  &:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid #d9fdd3;
    border-right: 10px solid transparent;
    border-top: 10px solid #d9fdd3;
    border-bottom: 10px solid transparent;
    right: -20px;
    top: 6px;
  }
`

