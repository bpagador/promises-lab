const { getCharacter } = require('../lib/getCharacter');

jest.mock('superagent', () => ({
  get: () => {
    return Promise.resolve({
      body: {
        'id': 18, 
        'name': 'Antenna Morty',
        'status': 'Alive',
        'species': 'Human'
      }
    });
  }
}));

describe('functions to get Rick and Morty character(s)', () => {

  it('gets one character from the api', () => {
    return getCharacter(18)
      .then(result => {
        expect(result).toEqual({
          'name': 'Antenna Morty',
          'status': 'Alive',
          'species': 'Human'
        });
      });
  });
});
