import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import api from '../../../service/api'
import {
  changeMessageLives,
  changeStep
} from '../../../store/actions/chatAction'
import Loading from '../Loading'
import { BotMessage, BotMessageBalloon, ClientMessage, ClientMessageBalloon, Text } from './styles'

const StepFour = props => {
  const [session, setSession] = useState(false)
  const { store, updateMessageLives, updateStep } = props
  const step = store.step
  const lives = store.qPessoas
  const messageLives = store.messageqPessoas

  useEffect(() => {
    setTimeout(() => {
      setSession(true)
    }, '1500')
  }, [])

  useEffect(() => {
    if (lives !== '') {
      const regex = /[0-9]/
      const isValid = regex.test(lives)
      setTimeout(() => {
        if (isValid === true) {
          updateMessageLives({ id: 2, text: lives })
          UpgradeLeadQvidas()
        }

        if(isValid === false) {
          updateMessageLives({ id: 1, text: 'Ops coloque um numero válido de 1 á 999!'})
        }
      }, '500')
    }
  }, [lives])

  async function UpgradeLeadQvidas() {
    const idLead = localStorage.getItem('idLead')

    const data = {
        id_origem: store.idorigem,
        id: parseInt(idLead),
        vidas: parseInt(lives),
    }

    try {
        let response = await api.post('integracao/cadastro', data)
        //console.log(response);
        if (response.data.status === 'error') {
          updateMessageLives({ id: 1, text: response.data.critica })
        }
        if (response.data.status === "success") {
          updateStep(step +1)
        }
    } catch (err) {
      updateMessageLives({ id: 1, text: err })
    }
  }

  return (
    <React.Fragment>
      <Loading />
      {session ? (
        <>
          <BotMessage>
            <BotMessageBalloon>
              <Text>O plano é para quantas pessoas?</Text>
            </BotMessageBalloon>
          </BotMessage>
        </>
      ) : null}
      {messageLives.length > 0 ? (
        messageLives.map(message => {
          if(message.id == 2) {
            return (
              <ClientMessage key={message.text}>
                <ClientMessageBalloon>
                  <Text>{message.text}</Text>
                </ClientMessageBalloon> 
              </ClientMessage>
            )
          } 

          if(message.id == 1) {
            return (
              <BotMessage key={message.text}>
                <BotMessageBalloon>
                  <Text>{message.text}</Text>
                </BotMessageBalloon>
              </BotMessage>
            )
          }
        })
      ) : <></>}
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
    updateMessageLives (message) {
      const action = changeMessageLives(message)
      dispatch(action)
    },
    updateStep (step) {
      const action = changeStep(step)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepFour)
