import React from 'react';
import {Link, Decorator as Cerebral} from 'cerebral-view-react';

@Cerebral({
  clicks: "clicks"
})
export default class SignalClicker extends React.Component {
  render() {
    return (
      <div><Link href="#" signal={this.props.signals.linkClicked}>Add to clicks:</Link> {this.props.clicks}</div>
    );
  }
}
