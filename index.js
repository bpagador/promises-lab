const { clear } = require('console');

const fsPromises = require('fs').promises;

//read a file

const readAFile = fsPromises.readFile('./README.md', { encoding: 'utf-8' });

readAFile
  .then(contents => {
    return console.log(contents);
  });

// write a file 

fsPromises.writeFile('./write-file.txt', 'oh I can write whatever I want!')
  .then(() => console.log('DONE!'));

// copy a file 
// having the hardest time wrapping my head around this one, moving on to copy function 


// copy function

const copyFile = (src, dst) => {
  return fsPromises.readFile(src)
    .then(result => fsPromises.writeFile(dst, result));
};

module.exports = {
  copyFile
};

