const fs = require('fs');
const filePath = 'data.txt';

const updateRecord = (oldData, newData) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    const updatedData = data.replace(oldData, newData);
    fs.writeFile(filePath, updatedData, 'utf8', (err) => {
      if (err) throw err;
      console.log('Record updated successfully.');
    });
  });
};
updateRecord('This is the Created file', 'This is the Created file, Updated');

