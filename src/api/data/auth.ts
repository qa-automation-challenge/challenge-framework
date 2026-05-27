export const auth = {
  register: {
    email: 'eve.holt@reqres.in',
    password: 'pistol',
  },

  invalidRegister: {
    email: 'sydney@fife',
  },

  login: {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  },
};

export const invalidLoginPayloads = [
  {
    payload: { email: 'peter@klaven' },
    error: 'Missing password',
  },
  {
    payload: { password: '123456' },
    error: 'Missing email or username',
  },
];