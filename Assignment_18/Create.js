const fs = require('fs');
const filePath = 'data.txt';


const createRecord = (data) => {
  fs.appendFile(filePath, data + '\n', (err) => {
    if (err) throw err;
    console.log('File created successfully.');
  });
}

createRecord('This is the Created file');
