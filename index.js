
const fs = require('fs').promises;

const readAFile = fs.readFile('./package.json', { encoding: 'utf-8' });

readAFile
  .then(contents => {
    return console.log(contents);
  });

fs.writeFile('./write-file.txt', 'text file')
  .then(() => console.log('DONE!'));
