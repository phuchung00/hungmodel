import React, { Component } from 'react'
import './Styles.css'

export default class NewModal extends Component {
  constructor(props, context){
    super(props, context);
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      open : false
    }
  }

  handleClose() {
    this.setState({
    open : false
    })
  }
  handleOpen() {
    this.setState({
      open:true
    })
  }

  render() {
    let className = 'modal '
    const open = this.state.open

    open?
      (className += 'open'):(
        className += 'close'
      )
    
    return (
      <div>
        <button onClick = {this.handleOpen}>Open</button>
        <button onClick = {this.handleClose}>Close</button>
        <div className = {className}>
        {this.props.children}
        </div>
        </div>
    )
  }
}
