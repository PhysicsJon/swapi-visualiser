import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  onIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  onDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <h3 id="count">{this.state.count}</h3>
        <button onClick={this.onIncrement} data-test-id="add-counter">+</button>
        <button onClick={this.onDecrement} data-test-id="minus-counter">-</button>
      </div>
    );
  }
}
