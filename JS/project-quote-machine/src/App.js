import React from 'react';
import { Button, Toast, ToastBody, ToastHeader, Fade } from 'reactstrap';
import PropTypes from "prop-types";
import logo from './logo.svg';
import './App.css';
import QUOTES from './quotes.js';


class App extends React.Component {
    constructor(props){
        super(props)
        const tmp = this.differentRandomNum()
        this.state={
            quote: QUOTES[tmp],
            number: tmp
        }
        this.differentRandomNum = this.differentRandomNum.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    differentRandomNum(currentNum=-1){
        const getRandom = () => Math.floor(Math.random()*(QUOTES.length))
        let tmp = getRandom()
        if(QUOTES.length===1) return 0
        while(tmp === currentNum){
            tmp = getRandom () }
        return tmp
    }

    handleClick(){
        const tmp = this.differentRandomNum(()=> this.state.number)
        this.setState({
            quote: QUOTES[tmp],
            number: tmp   })
    }
    render(){
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Quote Machine</h1>
      </header>
      <body>
      <div className="p-3 bg-primary my-2 rounded">
        <Toast>
            <ToastHeader>
              Quote:
            </ToastHeader>
          <ToastBody>
            <p id="text">{this.state.quote.quote}</p>
            <p id="author">- {this.state.quote.author}</p>
            <Button id="new-quote" onClick={this.handleClick}>New quote</Button>
            <a id="tweet-quote" href={"https://twitter.com/intent/tweet/%text="+this.state.quote.quote} class="twitter-share-button">Tweet</a>
          </ToastBody>
        </Toast>
      </div>
      </body>
    </div>
  );
    }
}

export default App;

Toast.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string, // default: 'success'
  isOpen: PropTypes.bool,  // default: true
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // Controls the transition of the toast fading in and out
  // See Fade for more details
  transition: PropTypes.shape(Fade.propTypes),
}
