import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';

@Cerebral({
  count: 'count'
})
export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      run: false
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.run) {
        this.props.signals.updateCount();
      }
    }, 1000);
  }

  handleRun(e) {
    e.preventDefault();
    this.setState({ run: !this.state.run });
  }

  render() {
    return (
      <div>
        <div>Running: {this.state.run ? "true" : "false"}</div>
        <br />
        <div>Count: {this.props.count}</div>
        <br />
        <a href="#" onClick={this.handleRun.bind(this)}>
        {this.state.run ? "Stop" : "Start"}
        </a>
      </div>
    );
  }
}
