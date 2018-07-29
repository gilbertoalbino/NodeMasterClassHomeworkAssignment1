/**
 * NodeJS Master Class Homework Assignment #1.
 * 
 * The purpose of this assignmetn is to create a simple "Hello World API".
 * 
 * @author Gilberto Albino
 * @link https://github.com/gilbertoalbino/NodeMasterClassHomeworkAssignment1.git
 */

/**
 * Dependencies
 */
const http = require('http');
const config = require('./app/configs');
const app = require('./src/app');

const server = http.createServer((request, response) => {
    app.dispatch(request, response);
});

server.listen(config.port, () => {
    console.log(`Server is up and running on port ${config.port}`);
});