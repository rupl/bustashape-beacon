var beacon = require('eddystone-beacon');
var url = 'https://bit.ly/bs-beacon';

console.log('⚡  broadcasting ' + url);
beacon.advertiseUrl(url);
