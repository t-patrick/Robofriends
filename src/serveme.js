var http = require('http');
var fs = require('fs');
var path = require('path');
const { debug } = require('console');

// http = http interface. createServer takes one parameter - a RequestListener. Which takes a request and a response.
// createServer() returns a server object. You then call listen(portNumber) on it.

http.createServer((req,res) => {


    /*
    possible urls: 
        mysite.com/
        mysite.com/folder/file.html
        mysite.com/file.html
        The request has already reached mysite.com or ip address 76.234.54.234. The home directory is ./
        Request url will be /path or /file.html etc. Will always have /

    */
    var filePath = '.' + request.url;
    if (filePath == './') {

    }


}).listen(8125);
// I can't find the code