import updateId from '../actions/update-id';
import {copy, set} from 'cerebral-addons';

export default [
  updateId,
  copy('input:/id', 'state:/id'),
  ({input, services}) => {
    services.router.redirect('/' + input.id)
  }
];
