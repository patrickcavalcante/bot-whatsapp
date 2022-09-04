import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import Loading from '../Loading/index';
import { BotMessage, BotMessageBalloon, Text } from './styles'

const StageThree = props => {
  const [session, setSession] = useState(false);
  const { store } = props

  useEffect(() => {
    setTimeout(() => {
      setSession(true);
    }, "1500");
  },[]);

  return (
    <React.Fragment>
      <Loading />  
      {session ? <>
        <BotMessage>
          <BotMessageBalloon>
            <Text>{`Olá, ${store.nome} vamos continuar? Primeiro, nos informe seu telefone de contato com DDD.`}</Text>
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

export default connect(mapStateToProps)(StageThree)