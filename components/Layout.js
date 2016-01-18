import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import Create from './Create';
import Home from './Home';
import Detail from './Detail';

@Cerebral({
  app: 'app'
})
export default class Layout extends React.Component {
  render() {
    switch (this.props.app) {
      case 'home':
        return <Home />;
      case 'create':
        return <Create />;
      case 'detail':
        return <Detail />;
      default:
        throw new Error('App not found');
    }
  }
}
