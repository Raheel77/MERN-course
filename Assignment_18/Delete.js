const fs = require('fs');
const filePath = 'data.txt';


const deleteFile = () => {
  fs.unlink(filePath, (err) => {
    if (err) throw err;
    console.log('File deleted successfully.');
  });
};

deleteFile();
