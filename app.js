const CSVtoJSON = require('csvtojson');
const JSONtoCSV = require('jsontocsv');
const FileSystem = require('fs');

CSVtoJSON().fromFile('./data/enquete.csv').then(data => {
    console.log(data[44])
});