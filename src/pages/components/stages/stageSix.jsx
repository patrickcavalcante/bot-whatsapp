import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { changeStep } from '../../../store/actions/chatAction'
import Loading from '../Loading'
import {BotMessage, BotMessageBalloon, BotMessageImage, Container, ContainerCollum, Title, Subtitle, Divisor, Link, Separator, Text} from './styles'

const StepSix = props => {
  const [session, setSession] = useState(false)
  const [sessionTwo, setSessionTwo] = useState(false)
  const { store, updateStep } = props
  const step = store.step

  useEffect(() => {
    setTimeout(() => {
      setSession(true)
      updateStep(step +1)
    }, "2000");
    setTimeout(() => {
      setSessionTwo(true)
      updateStep(step +1)
    }, "3000");
  },[]);

  return (
    <React.Fragment>
      <Loading />  
      {session ? <>
        <BotMessage>
          <BotMessageBalloon>
            <Text>Estamos redirecionando você agora mesmo para um de nossos consultores.</Text>
          </BotMessageBalloon>
        </BotMessage>
      </> : null}
      {sessionTwo ? <>
        <BotMessage>
          <BotMessageBalloon>
            <Container>
              <BotMessageImage src={`https://app.leadmark.com.br/themes/now/img/operadoras/${store.idOp}.png`} />
              <ContainerCollum>
                <Title>Atendente Credenciado</Title>
                <Subtitle>Funcionamos diariamente de 8:00 as 18:00</Subtitle>
              </ContainerCollum>
            </Container>
            <Divisor />
            <Container>
              <Link>Conversar com</Link>
              <Separator />
              <Link>Ver empresa</Link>
            </Container>
          </BotMessageBalloon>
        </BotMessage>
      </> : null}
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    store: state.chatContext
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateStep(step) {
      const action = changeStep(step)
      dispatch(action)
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(StepSix)