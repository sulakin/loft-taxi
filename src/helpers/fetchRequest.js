const serverURL = 'https://loft-taxi.glitch.me';

const auth = (payload) => {
  return fetch(`${serverURL}/auth`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .catch((error) => error);
};

const setProfile = (payload) => {
  return fetch(`${serverURL}/card`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .catch((error) => error);
};

const getProfile = (payload) => {
  return fetch(`${serverURL}/card?token=${payload.token}`)
    .then((response) => response.json())
    .catch((error) => error);
};

const getRoute = (token) => {
  return fetch(`${serverURL}/route`)
    .then((response) => response.json())
    .catch((error) => error);
};

const getAddressList = (token) => {
  return fetch(`${serverURL}/addressList`)
    .then((response) => response.json())
    .catch((error) => error);
};

export { auth, setProfile, getProfile, getRoute, getAddressList };
