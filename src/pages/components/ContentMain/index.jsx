import React, { useState, useEffect } from 'react'
import { MainContent } from './styles'
import { connect } from 'react-redux'
import { changeStep } from '../../../store/actions/chatAction'
import Header from '../Header'
import Footer from '../Footer'
import StageOne from '../stages/stageOne'
import StageTwo from '../stages/stageTwo'
import StageThree from '../stages/stageThree'

const ContentMain = props => {
  const {store} = props

  const step = store.step
  const [stageTwo, setStageTwo] = useState(false)
  const [stageThree, setstageThree] = useState(false)

  useEffect(() => {
    if(step === 2) {
      setStageTwo(true);
    }
    if(step === 3) {
      setstageThree(true);
    }
  }, [step]);


  return (
    <React.Fragment>
      <Header />
      <MainContent>
        <StageOne />
        {stageTwo ? <StageTwo /> : null}
        {stageThree ? <StageThree /> : null}
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