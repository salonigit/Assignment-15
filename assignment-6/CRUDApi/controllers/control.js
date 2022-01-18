const querystring = require('querystring');
const { getSingleUser, postService, putService, deleteService, getAllUser } = require("../services/servise")


const getRequest = function (urlParse, parsedData, res) {
    const search = urlParse.search;
    if (search) {
        const [, query] = urlParse.search.split('?');
        const data = querystring.parse(query);
        getSingleUser(parsedData, data, res);
    }
    else {
        getAllUser(parsedData, res);
    }
}

const postRequest = function (data, parsedData, res) {
    const jsondata = JSON.parse(data);
    const givenId = jsondata.id;
    const givenName = jsondata.name;
    postService(parsedData, givenId, givenName, res)
}

const putRequest = function (urlParse, parsedData, res, data) {
    const search = urlParse.search;
    if (search) {
        const [, query] = urlParse.search.split('?');
        const id = querystring.parse(query).id;
        if (id) {
            const jsondata = JSON.parse(data);
            const givenName = jsondata.name;
            putService(parsedData, id, givenName, res);
        }
    }
}

const deleteRequest = function (urlParse, parsedData, res) {
    const search = urlParse.search;
    if (search) {
        const [, query] = urlParse.search.split('?');
        const data = querystring.parse(query);
        deleteService(parsedData, data, res);
    }
}

module.exports = {
    getRequest, postRequest, putRequest, deleteRequest
}