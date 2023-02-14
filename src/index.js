import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// using class based compnents here
class Counter extends React.Component {
  //initial state of counter
  state = {
    counter: 0
  }
  
  //function to update state of counter
  increment = () => {
    this.setState({counter: this.state.counter+1});
    navigator.vibrate(300); //vibrates after user clicks this button

  }

  //function which renders whole content in class based components
  render() {
    return <div className='main'>
      <div className='header'>
        <h1>Counter Application</h1>
        <br/>
        <h4>Please do use this counter app in landscape mode for better viewing &#128151; &#128151;</h4>
      </div>
      
      <div className='container'>
        <section className='value'>
          <p class='font-weight-bold'>{this.state.counter}</p> 
          {/*shows value of counter */}
        </section>

        <section className='button'> 
          <button type='button' onClick={this.increment} class='btn btn-primary btn-lg'>Increment</button> 
          {/**button component and it's after effects */}
        </section>
      </div>

      <div className='contact'>
        <a href='https://samarth-portfolio-website.000webhostapp.com' target='_blank'>
          <button type='button' class='btn btn-success'>Contact</button>
        </a>
      </div>

    </div> 
  }
}

const el = <Counter />; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  el, 
  document.getElementById('root')
);