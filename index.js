const fsPromises = require('fs').promises;

//read a file

const readFile = fsPromises.readFile('./README.md', { encoding: 'utf-8' });

readFile
  .then(contents => {
    return console.log(contents);
  });

// write a file 

fsPromises.writeFile('./write-file.txt', 'oh I can write whatever I want!')
  .then(() => console.log('DONE!'));

// copy function

const copyFile = (src, dst) => {
  return fsPromises.readFile(src)
    .then(result => fsPromises.writeFile(dst, result));
};

// transformer

//reversing the string requires a few steps

const reverseString = (string) => {
  let step1 = string.split('');
  let step2 = step1.reverse();
  let result = step2.join('');

  return result;
};

const transformer = (source) => {
  return fsPromises.readFile(source, { encoding: 'utf8' })
    .then(string => string.replace(/[^a-z]/g, ''))
    .then(string => string.toUpperCase())
    .then(string => reverseString(string));
};

module.exports = {
  copyFile,
  transformer
};

