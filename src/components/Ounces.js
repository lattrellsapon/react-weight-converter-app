import React, { Component } from 'react'

export class Ounces extends Component {

  checkProp = () => {
    return {
        display: this.props.ounces === 0 ? 'none' : 'block'
    }
  }

  render() {
    return (
    <div className="card" id="ounces" style={ this.checkProp()}>
        <div className="card-content">
            <h4>Ounces:</h4>
            <div id="ouncesOutput">{this.props.ounces}</div>
        </div>
    </div>
    )
  }
}

export default Ounces
