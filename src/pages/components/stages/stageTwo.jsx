import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { changeStep } from '../../../store/actions/chatAction'
import {ClientMessage, ClientMessageBalloon, Text} from './styles'

const StepTwo = props => {
  const { store, updateStep } = props
  const step = store.step

  useEffect(() => {
    setTimeout(() => {
      updateStep(step +1)
    }, "1500");
  },[]);

  return (
    <ClientMessage>
      <ClientMessageBalloon>
        <Text>{store.nome}</Text>
      </ClientMessageBalloon> 
    </ClientMessage>
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


export default connect(mapStateToProps, mapDispatchToProps)(StepTwo)
