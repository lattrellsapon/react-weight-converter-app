import React, { Component } from 'react'

export class Form extends Component {
  render() {
    return (
      <div>
        <form>
            <input type="number" name="pounds" placeholder="Please enter in the pound(s) you want to convert." onChange={this.props.processCalculation}/>
        </form>
      </div>
    )
  }
}

export default Form
