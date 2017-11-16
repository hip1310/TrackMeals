import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addRecipe, removeFromCalendar} from '../actions'

class App extends Component {
  render() {
    console.log('App Component render()')
    console.log(this.props)
    return (
      <div>
        Hello World
      </div>
    )
  }
}

function mapStateToProps(calendar){
  return{
    calendar
  }
}

function mapDispatchToProps(dispatch){
  return{
    addRecipe : (data) => dispatch(addRecipe(data)),
    remove    : (data) => dispatch(removeFromCalendar(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
