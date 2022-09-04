import React from 'react'
import { MainContent } from './styles'
import { connect } from 'react-redux'
import Header from '../Header'
import Footer from '../Footer'

const ContentMain = props => {
  return (
    <React.Fragment>
      <Header />
      <MainContent />
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