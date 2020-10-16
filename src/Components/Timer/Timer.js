import React from 'react';
import './Timer.css';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: props.to - new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.update(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  update() {
    this.setState((prevState) => ({
      distance: prevState.distance - 1000
    }));
  }

  render() {
    const _second = 1000,
      _minute = _second * 60,
      _hour = _minute * 60,
      _day = _hour * 24;

    const {distance} = this.state;

    const second_distance = Math.floor(distance / _second),
      minute_distance = Math.floor(distance / _minute),
      hour_distance = Math.floor(distance / _hour),
      day_distance = Math.floor(distance / _day);

    const timer = (
      <div className="goal_timer">
        <div className="days">Days : {day_distance}</div>
        <div className="hrs"><strong>Hours : {hour_distance}</strong></div>
        <div className="mins">Minutes : {minute_distance}</div>
        <div className="secs">Seconds :{second_distance}</div>
      </div>
    );

    const timeUp = (
      <div className="goal_timer">
        Did you acheive your Goals?
      </div>
    )

    return (
      distance > 0 ? timer : timeUp
    );
  }
}

export default Timer;