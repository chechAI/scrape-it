"use strict"

require('dotenv').config(); 
const scrapeIt = require("scrape-it");

const url = process.env.URL || 'https://ionicabizau.net';
const opts = require("./opts.json");

console.log('url:', url)
console.log('opts:', opts)

// Promise interface
//scrapeIt(url, opts, cb)
scrapeIt(url, opts)
.then(({ data, status }) => {
    console.log(`Status Code: ${status}`)
    console.log(data)
});

