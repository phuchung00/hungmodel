import React, { Component } from 'react'
import style from './Styles.css'

export default class Modals extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      open: false,
    };
  }
  handleClose() {
    this.setState({
      open: false
    });
  }
  handleOpen() {
    this.setState({
      open: true,
    });
  }
  render() {
    let className = "modal ";
    const open = this.state.open;
    if (open) {
      className += 'open';
    } else {
      className += 'close';
    }
    return (
      <div>
        <h2>Model</h2>
        <button id="myBtn" onClick={this.handleOpen} >Show Modal</button>
        <button id="myBtn" onClick={this.handleClose} >Close Modal</button>
        <div id="myModal" className={className}>
          <h2>Hi!</h2>
        </div>
      </div>
    );
  }
}