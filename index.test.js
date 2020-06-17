const fsPromise = require('fs').promises;
const { copyFile } = require('./index');

describe('functions tests', () => {
  beforeAll(() => {
    return fsPromise.writeFile('./test1.txt', 'testing testing 111');
  });

  afterAll(() => {
    return Promise.all([
      fsPromise.unlink('./test1.txt'),
      fsPromise.unlink('./test2.text')
    ]);
  });

  it('tests copyFile function', () => {
    return copyFile('./test1.txt', './test2.text')
      .then(() => {
        return fsPromise.readFile('./test2.text', { encoding: 'utf8' });
      })
      .then(newFile => {
        expect(newFile).toEqual('testing testing 111');
        console.log(newFile);
      });
  });
});
