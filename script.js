if (typeof fetch !== 'function') {
    global.fetch = require('node-fetch-polyfill');
}
const d3 = require('d3-fetch')

d3.csv('/data/enquete.csv').then(function (data) {
    console.log(data[0]);
});