import React, { Component } from 'react'

export class Kilograms extends Component {

    checkProp = () => {
        return {
            display: this.props.kilograms === 0 ? 'none' : 'block'
        }
    }

  render() {
    return (
        <div className="card" id="kilograms" style={ this.checkProp()}>
            <div className="card-content">
                <h4>Kilograms:</h4>
                <div id="kilogramsOutput">{this.props.kilograms}</div>
            </div>
        </div>
    )
  }
}

export default Kilograms;
