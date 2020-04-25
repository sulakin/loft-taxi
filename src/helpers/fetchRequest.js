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

const register = (payload) => {
  return fetch(`${serverURL}/register`, {
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

const getRoute = (address1, address2) => {
  return fetch(`${serverURL}/route?address1=${address1}&address2=${address2}`)
    .then((response) => response.json())
    .catch((error) => error);
};

const getAddressList = () => {
  return fetch(`${serverURL}/addressList`)
    .then((response) => response.json())
    .then((response) => response.addresses.map((item) => ({ value: item })))
    .catch((error) => error);
};

export { auth, register, setProfile, getProfile, getRoute, getAddressList };
