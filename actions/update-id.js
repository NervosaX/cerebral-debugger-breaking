export default function({ state, output }) {
  let idCount = state.get('idCount');
  idCount ++;
  state.set('idCount', idCount);
  output({ id: idCount });
}
