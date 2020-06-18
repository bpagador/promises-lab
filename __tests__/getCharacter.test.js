const { getCharacter, getManyCharacters } = require('../lib/getCharacter');

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
// I keep getting an error message when trying to add another object into the body, what's the deal?

describe('functions to get Rick and Morty character(s)', () => {

  it('gets one character from the api', () => {
    return getCharacter(1)
      .then(result => {
        expect(result).toEqual({
          'name': 'Antenna Morty',
          'status': 'Alive',
          'species': 'Human'
        });
      });
  });

  it('get many characters from API', () => {
    return getManyCharacters([1, 2, 3, 4, 5])
      .then(result => {
        expect(result).toEqual([
          {
            'name': 'Antenna Morty',
            'status': 'Alive',
            'species': 'Human'
          },
          {
            'name': 'Antenna Morty',
            'status': 'Alive',
            'species': 'Human'
          },
          {
            'name': 'Antenna Morty',
            'status': 'Alive',
            'species': 'Human'
          }
          ,
          {
            'name': 'Antenna Morty',
            'status': 'Alive',
            'species': 'Human'
          },
          {
            'name': 'Antenna Morty',
            'status': 'Alive',
            'species': 'Human'
          }
        ]);
      });
  });
});
