import React, { useState } from 'react'
import { connect } from 'react-redux'
import { changeName, changeStep, changeTell, changeLives} from '../../../store/actions/chatAction'

import {
  BgFooter,
  Content,
  GridContent,
  IconPlus,
  IconUpload,
  IconMicro,
  IconSend,
  Input
} from './styles'

const Footer = props => {
  const [text, setText] = useState('')
  const { store, updateName, updateStep, updateTell, updateLives } = props
  const step = store.step

  function hadleCotacao(e) {
    e.preventDefault();
    if(step === 1) {
      updateName(text)
      updateStep(step +1)
      setText('')
    }

    if(step === 3) {
      if(text.length >= 11) {
        updateTell(text)
        setText('')
      }
    }

    if(step === 4) {
      updateLives(text)
      setText('')
    }
  }
  
  function sendMessage(e) {
    e.preventDefault();
    if(step === 1) {
      updateName(text)
      updateStep(step +1)
      setText('');
    }
    if(step === 3) {
      if(text.length >= 11) {
        updateTell(text)
        setText('')
      }
    }
    if(step === 4) {
      updateLives(text)
      setText('')
    }
  }

  return (
    <BgFooter>
      <Content>
        <GridContent>
          <IconPlus src='/assets/img/adicionar.svg' alt='adicionar' />
          <form onSubmit={hadleCotacao}>
            <Input type='text' placeholder='' value={text} onChange={(e) => setText(e.target.value)} />
          </form>
          <IconUpload src='/assets/img/file-upload.svg' alt='file' />
          {text.length > 0 ? 
            <IconSend onClick={sendMessage} src='/assets/img/send-message.svg' alt='send' /> : 
            <IconMicro src='/assets/img/microphone.svg' alt="micro"/>
          }
        </GridContent>
      </Content>
    </BgFooter>
  )
}

const mapStateToProps = state => {
  return {
    store: state.chatContext
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateName(name) {
      const action = changeName(name)
      dispatch(action)
    },
    updateStep(step) {
      const action = changeStep(step)
      dispatch(action)
    },
    updateTell(telefone) {
      const action = changeTell(telefone)
      dispatch(action)
    },
    updateLives(lives) {
      const action = changeLives(lives)
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)

