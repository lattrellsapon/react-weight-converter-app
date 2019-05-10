import React , {Component} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Grams from './components/Grams';
import Kilograms from './components/Kilograms';
import Ounces from './components/Ounces';
import './App.css';


export class App extends Component {

  state = {
    grams: undefined,
    kilograms: undefined,
    ounces: undefined
  }

  processCalculation = (e) => {

    let pounds = parseFloat(e.target.value);

    if(isNaN(pounds)){
      pounds = 0;
    } else{
      pounds = parseFloat(e.target.value);
    }

    let grams = pounds/0.0022046;
    let kilograms = pounds/2.2046;
    let ounces = pounds*16;

    this.setState({
      grams: grams,
      kilograms: kilograms,
      ounces: ounces
    });

  }

  render() {
    return (
      <div className="container">
      <Header/>
      <Form processCalculation = {this.processCalculation}/>
      <Grams grams={this.state.grams}/>
      <Kilograms kilograms={this.state.kilograms}/>
      <Ounces ounces={this.state.ounces}/>
    </div>
    )
  }
}

export default App;






