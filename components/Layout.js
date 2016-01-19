import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import Create from './Create';
import Detail from './Detail';

@Cerebral({
  app: 'app'
})
export default class Layout extends React.Component {
  render() {
    switch (this.props.app) {
      case 'create':
        return <Create />;
      case 'detail':
        return <Detail />;
      default:
        throw new Error('App not found');
    }
  }
}
