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
const StringDecoder = require('string_decoder').StringDecoder;
const routeDispatcher = require('./routeDispatcher');

/**
 * The application is responsible for dispatching the parsed request.
 */
const app = {};

/**
 * Dispatches the application.
 * 
 * @param { object } request 
 * @param { object } response 
 */
app.dispatch = (request, response) => {

    // If the app will use payload anytime.
    let decoder = new StringDecoder('utf-8');
    let payload = '';

    request.on('data', data => {
        payload += decoder.write(data);
    });

    request.on('end', () => {
        payload += decoder.end();
        routeDispatcher.run(request, response);
    });
};

module.exports = app;