import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Home from './Home'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className='container'>
        <LoadingBar style={{ backgroundColor: 'black' }} />
        {this.props.loading === null
          ? null
          :<Home/>
        }
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
