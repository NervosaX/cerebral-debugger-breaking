import React from 'react';
import ReactDOM from 'react-dom';
import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import {Container} from 'cerebral-view-react';
import Router from 'cerebral-module-router';
import {set, copy} from 'cerebral-addons';
import Layout from './components/Layout';
import createClicked from './signals/createClicked';

const controller = Controller(Model({
  app: 'create',
  id: 0,
  idCount: 0
}));

controller.signals({
  create: [set('state:/app', 'create')],
  detail: [
    set('state:/app', 'detail'),
    copy('input:/id', 'state:/id')
  ],
  createClicked
});

controller.modules({
  router: Router({
    '/': 'create',
    '/:id': 'detail'
  }, {
    onlyHash: true
  })
});


ReactDOM.render((
  <Container controller={controller}>
    <Layout />
  </Container>
) , document.getElementById('main'));
