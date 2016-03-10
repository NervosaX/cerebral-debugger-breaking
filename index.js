import React from 'react';
import ReactDOM from 'react-dom';
import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import {Container} from 'cerebral-view-react';
import Layout from './components/Layout';
import {debounce} from 'cerebral-addons';
import DevTools from 'cerebral-module-devtools';

const controller = Controller(Model({
  count: 0
}));

controller.addSignals({
  updateCount: [
    debounce(2000, [
      function({ state }) {
        state.set("count", state.get("count") + 1);
      }
    ], { immediate: false })
  ]
});

controller.addModules({
  devtools: DevTools()
});

ReactDOM.render((
  <Container controller={controller}>
    <Layout />
  </Container>
) , document.getElementById('main'));
