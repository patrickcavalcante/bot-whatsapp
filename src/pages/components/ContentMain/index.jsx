import React from 'react'
import { MainContent } from './styles'
import { connect } from 'react-redux'
import Header from '../Header'
import Footer from '../Footer'
import Loading from '../Loading'

const ContentMain = props => {
  return (
    <React.Fragment>
      <Header />
      <MainContent>
        <Loading />
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