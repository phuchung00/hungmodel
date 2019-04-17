import React, { Component } from 'react'
import Modal from './Modal';

export default class index extends Component {
  render() {
    return (
      <div>
        <Modal>
          {this.props.children}
          <h1>this is Modal</h1>
        </Modal>
      </div>
    )
  }
}
