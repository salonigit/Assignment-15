const fs = require('fs');

const writeFile = function (parsedData, res) {
    fs.writeFile('./data.json', JSON.stringify(parsedData), (err) => {
        if (err) {
            const message = { message: 'could not persist data!' };
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(message, null, 2));
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(parsedData, null, 2));
        }
    });
}

const getAllUser = function (parsedData, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(parsedData, null, 2));
}

const getSingleUser = function (parsedData, data, res) {
    let requiredData = parsedData.filter(project => project.id == data.id);
    getAllUser(requiredData,res)
}

const postService = function (parsedData, givenId, givenName, res) {
    parsedData.push({ id: givenId, name: givenName });
    writeFile(parsedData, res);
}

const putService = function (parsedData, id, givenName, res) {
    parsedData.forEach((project, index) => {
        if (project.id == id) {
            parsedData[index].name = givenName;
        }
    });
    writeFile(parsedData, res)
}

const deleteService = function (parsedData, data, res) {
    parsedData = parsedData.filter(project => project.id != data.id);
    writeFile(parsedData, res)
}

module.exports = {
    getSingleUser, postService, putService, deleteService, getAllUser, writeFile
}