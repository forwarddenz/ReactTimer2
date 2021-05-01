import './App.css';
import React, {Component} from 'react';

class App extends Component {
  state = {
    count: 0,
    isCount: false
  }

  componentDidMount() {
    const userCount = localStorage.getItem('timer');
    if (userCount) {
      this.setState({count: +userCount});
    }
  }

  componentDidUpdate() {
    localStorage.setItem('timer', this.state.count);
  }

  componentWillUnmount() {}

  Start = () => {
    this.setState({isCount: true});
    this.countID = setInterval(() => {
      this.setState({count: this.state.count + 1});
    }, 1000);
  }

  Stop = () => {
    this.setState({isCount: false});
    clearInterval(this.countID);
  }

  Reset = () => {
    this.setState({isCount: false});
    clearInterval(this.countID);
    this.setState({count: 0});
  }

  render() {
    return (
      <div className="App">
        <div className='time'>{this.state.count}</div>
        {!this.state.isCount ? (
        <button onClick={this.Start}>Start</button>
        ) : (
        <button onClick={this.Stop}>Stop</button>
        )}
        <button onClick={this.Reset}>Reset</button>
      </div>
    );
  }
}

export default App;
