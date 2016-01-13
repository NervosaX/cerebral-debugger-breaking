import React from 'react';
import ReactDOM from 'react-dom';
import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import {Container} from 'cerebral-view-react';
import SignalClicker from './components/SignalClicker';
import linkClicked from './signals/link-clicked';

const controller = Controller(Model({
  clicks: 0
}));

controller.signals({
  linkClicked
});

ReactDOM.render((
  <Container controller={controller}>
    <SignalClicker />
  </Container>
) , document.getElementById('main'));


