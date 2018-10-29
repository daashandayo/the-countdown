import React,{Component} from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: new Date(),
      endDate: new Date('10/25/2021 00:0 AM')
    };


  }
  componentDidMount() {
    this.timerID = setInterval(() => this.update(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  update() {
    this.setState({
      now: new Date()
    });
  }
  render() {
    const _second = 1000,
      _minute = _second * 60,
      _hour = _minute * 60,
      _day = _hour * 24;
    const distance = this.state.endDate - this.state.now;
    const second = Math.floor(distance / _second),
      minute = Math.floor(distance / _minute),
      hour = Math.floor(distance / _hour),
      day = Math.floor(distance / _day);
    return (
      <div id="countdown_timer" >
        <div className="days">Days    : {day}</div>
        <div className="hrs"><strong>Hours   : {hour}</strong></div>
        <div className="mins">Minutes : {minute}</div>
        <div className="secs">Seconds :{second}</div>
      </div>
    );
  }
}

export default Timer;