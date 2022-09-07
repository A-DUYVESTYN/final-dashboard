import React, { Component } from 'react';
import Button from './Button';
let runner;

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'time': this.getCurrentTime()
    }
  }

  getCurrentTime = () => {
    const locale = this.props.locale ? this.props.locale : [];
    const hour12 = (this.props.hour12 === false) ? false : true;
    let hour, minute, second;
    if (this.props.format) {
      switch (this.props.format.toLowerCase()) {
        case 'hh':
          hour = '2-digit';
          break;
        case 'hh-mm':
          hour = '2-digit';
          minute = '2-digit';
          break;
        case 'hh-mm-ss':
          hour = '2-digit';
          minute = '2-digit';
          second = '2-digit';
          break;
        default:
          hour = '2-digit';
          minute = '2-digit';
          second = '2-digit';
      }
    }
    let time = new Date().toLocaleTimeString(locale, { 'hour12': hour12, 'hour': hour, 'minute': minute, 'second': second });
    return time;
  }

  componentDidMount() {
    runner = setInterval(() => {
      this.setState({ time: this.getCurrentTime() });
    }, 1000);
  }

  componentWillUnmount() {
    if (runner) {
      clearInterval(runner);
    }
  }

  render() {
    return (
      <>
      <Button type="hide" click={this.props.click} name="Clock" />
      <div className='time-tile'>
        <span className='time-text'>{this.state.time}</span>
      </div>
      </>
    );
  }
}

export default Clock;