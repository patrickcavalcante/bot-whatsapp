import React, { useState, useEffect, useRef } from 'react'
import { MainContent, MainContentAndroid, Spancing } from './styles'
import { connect } from 'react-redux'
import Header from '../Header'
import Footer from '../Footer'
import StageOne from '../stages/stageOne'
import StageTwo from '../stages/stageTwo'
import StageThree from '../stages/stageThree'
import StageFour from '../stages/stageFour'
import StageFive from '../stages/stageFive'
import StageSix from '../stages/stageSix'

const ContentMain = props => {
  const messagesEndRef = useRef(0);
  const scroll = messagesEndRef.current.offsetTop
  const { store } = props
  const step = store.step
  const [stageTwo, setStageTwo] = useState(false)
  const [stageThree, setstageThree] = useState(false)
  const [stageFour, setstageFour] = useState(false)
  const [stageFive, setstageFive] = useState(false)
  const [stageSix, setstageSix] = useState(false)

  const isPlataform = typeof window !== 'undefined' ? navigator.platform : false;

  useEffect(() => {
    if(step === 2) {
      setStageTwo(true);
    }
    if(step === 3) {
      setstageThree(true);
    }
    if(step === 4) {
      setstageFour(true);
    }
    if(step === 5) {
      setstageFive(true);
    }
    if(step === 6) {
      setstageSix(true);
    }
  }, [step])

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: messagesEndRef.current.offsetTop
    });
  }, [scroll])

  return (
    <React.Fragment>
      <Header />
        <MainContent>
          <StageOne />
          {stageTwo ? <StageTwo /> : null}
          {stageThree ? <StageThree /> : null}
          {stageFour ? <StageFour /> : null}
          {stageFive ? <StageFive /> : null}
          {stageSix ? <StageSix /> : null}
          <Spancing />
          <div ref={messagesEndRef} />
        </MainContent>
      <Footer />
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    store: state.chatContext
  }
}

export default connect(mapStateToProps)(ContentMain)