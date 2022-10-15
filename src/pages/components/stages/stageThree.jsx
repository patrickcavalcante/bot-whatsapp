import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import Loading from '../Loading/index'
import api from '../../../service/api'
import { BotMessage, BotMessageBalloon, Text, ClientMessage, ClientMessageBalloon } from './styles'
import { changeMessageTell } from '../../../store/actions/chatAction'

const StageThree = props => {
  const [session, setSession] = useState(false);
  const { store, updateMessageTell } = props
  const telefone = store.telefone
  const messageTelefone =store.messageTelefone

  useEffect(() => {
    setTimeout(() => {
      setSession(true)
    }, "1500");
  },[]);

  useEffect(() => {
    if(telefone.length >= 11) {
      setTimeout(() => {
        updateMessageTell({ id: 2, text: telefone })
        handleGetPhoneNumber(telefone, store)
      }, "500");
    }
  },[telefone])

  const handleGetPhoneNumber = (telefone, store) => {
    const tell = telefone
    const phoneNumber = tell.replace('+55', '').replace(/[^\d]+/g, '')
    const dddPhoneNumber = tell.slice(4, 6)
    phoneNumberValidation(phoneNumber, dddPhoneNumber, store)
  }
  
  // cadastra o lead -> atualiza o contexto
  async function registerLead (phoneNumber, hasWhatsApp, store) {
    const data = {
      id_origem: store.idorigem,
      id_segmento: store.segmento,
      id_tipo: store.tipo,
      id_produto: store.idop,
      id_ads: store.ads,
      nome: store.nome,
      telefones: [{ numero: phoneNumber, whatsapp: hasWhatsApp }]
    }
  
    try {
      const response = await api.post('integracao/cadastro', data)
      if (response.data.status === 'error') {
        //setError(response.data.critica)
        updateMessageTell({ id: 1, text: response.data.critica })
        throw new Error('response.data.critica')
      }
  
      if (response.data.status === 'success') {
        localStorage.setItem('idLead', response.data.lead.dados.id)
        console.log('lead Cadastrada')
      }
    } catch (err) {
      return
    }
  }
  
  // valida os caracteres digitados no input e chama o cadastramento do lead
  async function phoneNumberValidation(phoneNumber, dddPhoneNumber, store) {
    if(phoneNumber.length >= 11) {
      const data = {
        phone: phoneNumber
      }
  
      try {
        const response = await api.post('integracao/check/whatsapp', data, {timeout: 3000})
  
        if (response.data.numberExists === undefined) {
          throw new Error ('Ops, formulário indisponível no momento')
        }
  
        if (response.data.numberExists === true) {
          return registerLead(phoneNumber, 1, store)
        }
  
        if(response.data.numberExists === false) {
          //setError('Este telefone não possui WhatsApp. Por favor digite um número com WhatsApp')
          return
        }
      }
      catch(Error) {
        api.post('/integracao/check/sendrequesterror', {phone: phoneNumber, error: Error.message})
        return registerLead(phoneNumber, 0, store)
      }
    } else {
      //setError('Numero de telefone inválido digite novamente');
    }
  }

  console.log(store.messageTelefone)

  return (
    <React.Fragment>
      <Loading />  
      {session ? <>
        <BotMessage>
          <BotMessageBalloon>
            <Text>Olá, <strong>{store.nome}</strong> vamos continuar? Primeiro, nos informe seu telefone de contato com DDD.</Text>
          </BotMessageBalloon>
        </BotMessage>
      </> : null}
      {messageTelefone.length > 0 ? (
        messageTelefone.map(message => {
          if(message.id == 2) {
            return (
              <ClientMessage>
                <ClientMessageBalloon>
                  <Text>{message.text}</Text>
                </ClientMessageBalloon> 
              </ClientMessage>
            )
          } 

          if(message.id == 1) {
            return (
              <BotMessage>
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
    updateMessageTell(message) {
      const action = changeMessageTell(message)
      dispatch(action)
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(StageThree)