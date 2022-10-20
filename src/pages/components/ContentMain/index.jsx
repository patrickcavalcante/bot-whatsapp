import React, { useState, useEffect, useRef } from 'react'
import { MainContent } from './styles'
import { connect } from 'react-redux'
import Header from '../Header'
import Footer from '../Footer'
import StageOne from '../stages/stageOne'
import StageTwo from '../stages/stageTwo'
import StageThree from '../stages/stageThree'
import StageFour from '../stages/stageFour'
import StageFive from '../stages/stageFive'
import stageFive from '../stages/stageFive'

const ContentMain = props => {
  const bottomRef = useRef(null)
  const { store } = props

  const step = store.step
  const [stageTwo, setStageTwo] = useState(false)
  const [stageThree, setstageThree] = useState(false)
  const [stageFour, setstageFour] = useState(false)
  const [stageFive, setstageFive] = useState(false)

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
  }, [step])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [store]);

  return (
    <React.Fragment>
      <Header />
      <MainContent>
        <StageOne />
        {stageTwo ? <StageTwo /> : null}
        {stageThree ? <StageThree /> : null}
        {stageFour ? <StageFour /> : null}
        {stageFive ? <StageFive /> : null}
      </MainContent>
      <div ref={bottomRef} />
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