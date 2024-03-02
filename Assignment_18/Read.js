const fs = require('fs');
const filePath = 'data.txt';

const readRecords = () => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Records:', data);
  });
};

readRecords();
