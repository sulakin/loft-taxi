const getLocalState = () => {
  const parseState = localStorage.getItem('state');

  if (parseState !== null) {
    return JSON.parse(parseState);
  }
};

const setLocalState = (state) => {
  localStorage.setItem('state', JSON.stringify(state));
};

export { getLocalState, setLocalState };
