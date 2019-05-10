import React, { Component } from 'react'

export class Grams extends Component {

  checkProp = () => {
    return {
      display: this.props.grams === 0 ? 'none' : 'block'
    }
  }


  render() {
    return (
      <div className="card" id="grams" style={ this.checkProp() }>
        <div className="card-content">
            <h4>Grams:</h4>
            <div id="gramsOutput">{this.props.grams}</div>
        </div>
      </div>
    )
  }
}

export default Grams
