import debounce from 'lodash.debounce';

function action({ state, output }) {
  const clicks = state.get('clicks');

  setTimeout(function() {
    output({ clicks: clicks + 1 });
  }, 500)
}

const debouncedAction = debounce(action, 300);

export default function updateClicks(options) {
  debouncedAction(options);
}
