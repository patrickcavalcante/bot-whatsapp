import React, { useState } from 'react'
import { connect } from 'react-redux'
import { changeName, changeStep } from '../../../store/actions/chatAction'

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
  const { store, updateName, updateStep } = props
  const step = store.step

  function hadleCotacao(e) {
    e.preventDefault();
    if(step === 1) {
      updateName(text)
      updateStep(step +1)
      setText('');
    }

    if(step === 3) {
      console.log(text)
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
      console.log(text)
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)

