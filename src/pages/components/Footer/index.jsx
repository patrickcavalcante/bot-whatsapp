import React, { useState } from 'react'
import { connect } from 'react-redux'

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

  return (
    <BgFooter>
      <Content>
        <GridContent>
          <IconPlus src='/assets/img/adicionar.svg' alt='adicionar' />
          <Input type='text' placeholder='' value={text} onChange={(e) => setText(e.target.value)} />
          <IconUpload src='/assets/img/file-upload.svg' alt='file' />
          {text.length > 0 ? 
            <IconSend src='/assets/img/send-message.svg' alt='send' /> : 
            <IconMicro src='/assets/img/microphone.svg' alt="micro"/>
          }
        </GridContent>
      </Content>
    </BgFooter>
  )
}

export default connect()(Footer)

