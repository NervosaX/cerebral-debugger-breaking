import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';

@Cerebral()
export default class Create extends React.Component {
  handleClick(e) {
    e.preventDefault();
    this.props.signals.clickLink();
  }

  render() {
    return (
      <div>
        <div>Create</div>
        <a href="#" onClick={this.handleClick.bind(this)}>Click to create a new ID</a>
      </div>
    );
  }
}
