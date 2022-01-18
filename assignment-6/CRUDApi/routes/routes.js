const url = require('url');
const fs = require('fs');
const data = fs.readFileSync('./data.json');
let parsedData = JSON.parse(data);
const { getRequest, postRequest, putRequest, deleteRequest } = require("../controllers/control")

const routes = function (req, res) {

    const urlParse = url.parse(req.url, true);

    if (urlParse.pathname == '/projects' && req.method == 'GET') {
        getRequest(urlParse, parsedData, res);
    }

    if (urlParse.pathname == '/projects' && req.method == 'POST') {
        req.on('data', data => {
            postRequest(data, parsedData, res);
        });
    }

    if (urlParse.pathname == '/projects' && req.method == 'PUT') {
        req.on('data', data => {
            putRequest(urlParse, parsedData, res, data);
        });
    }
    if (urlParse.pathname == '/projects' && req.method == 'DELETE') {
        deleteRequest(urlParse, parsedData, res)
    }
}

module.exports = {
    routes
}