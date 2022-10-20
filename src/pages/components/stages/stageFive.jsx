import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import api from '../../../service/api'
import {
  changeMessageLives,
  changeType,
  changeStep
} from '../../../store/actions/chatAction'
import Loading from '../Loading'
import {
  BotMessage,
  BotMessageBalloon,
  ClientMessage,
  ClientMessageBalloon,
  Text
} from './styles'

const StepFive = props => {
  const [session, setSession] = useState(false)
  const { store, updateType } = props
  const type = store.tipo
  const lifes = store.qPessoas
  const company = store.nome_empresa

  useEffect(() => {
    setTimeout(() => {
      setSession(true)
    }, '1500')
  }, [])

  useEffect(() => {
    if (company !== '') {
      const regexYes = /[sS]i+(m+|n+)?|\b[sS]\b|[iIyY]e+(s+|i+s+)?/i
      const regexNot = /[nN][aAãÃ]+(o+|u+)|\b[nN]\b|[nN](o+|ot)|[ñÑ]/i
      const isValidSim = regexYes.test(company)
      const isValidNot = regexNot.test(company)

      if (isValidSim === true) {
        if (lifes > 1) {
          updateType(2)
        }
      }

      if (isValidNot === true) {
        if (lifes === 1) {
          updateType(1)
        }

        if (lifes > 1) {
          updateType(3)
        }
      }
    }
  }, [company])

  useEffect(() => {
    upgradeTypeLead()
  }, [type])

  async function upgradeTypeLead () {
    const idLead = localStorage.getItem('idLead')

    const data = {
      id_origem: store.idorigem,
      id: parseInt(idLead),
      id_tipo: store.tipo
    }
    try {
      let response = await api.post('integracao/cadastro', data)
      if (response.data.status === 'error') {
        console.log(response.data.critica)
      }
      if (response.data.status === 'success') {
        console.log('entrei aqui')
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <React.Fragment>
      <Loading />
      {session ? (
        <>
          <BotMessage>
            <BotMessageBalloon>
              <Text>Você possui empresa? Qual o nome? (Economiza até 40%)</Text>
            </BotMessageBalloon>
          </BotMessage>
        </>
      ) : null}
      {company !== '' ? (
        <>
          <ClientMessage>
            <ClientMessageBalloon>
              <Text>{company}</Text>
            </ClientMessageBalloon>
          </ClientMessage>
        </>
      ) : null}
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
    updateType (type) {
      const action = changeType(type)
      dispatch(action)
    },
    updateStep (step) {
      const action = changeStep(step)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepFive)
