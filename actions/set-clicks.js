export default function setClicks({ input, state }) {
  const {clicks} = input;
  if (clicks) {
    state.set("clicks", clicks);
  }
}
