import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';

@Cerebral({
  id: 'id'
})
export default class Detail extends React.Component {
  render() {
    return (
        <div>Detail {this.props.id}</div>
    );
  }
}
