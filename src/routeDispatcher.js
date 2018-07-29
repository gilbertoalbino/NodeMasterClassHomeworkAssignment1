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
const urlParser = require('./urlParser');
const actionHandler = require('../app/actionHandler');
const routesMapping = require('../app/routesMapping');

/**
 * Helper for dispatching an action from a given route.
 */
const routeDispatcher = {};

/**
 * Dispatches the action handler based on the request url path.
 * 
 * @param {object} request 
 * @param {object} response 
 * @param {object} routes 
 */
routeDispatcher.run = (request, response, routes) => {

    let requestPath = urlParser.fromRequest(request).getPath();
    let dispatcher = routesMapping[requestPath]
        ? routesMapping[requestPath]
        : actionHandler.notFound;

    dispatcher((statusCode, jsonData) => {

        statusCode = typeof (statusCode) == 'number' ? statusCode : 404;
        jsonData = typeof (jsonData == 'object') ? jsonData : {}

        response.setHeader('Content-Type', 'application/json');
        response.writeHead(statusCode);
        response.end(JSON.stringify(jsonData));

        return {
            getStatusCode: () => {
                return statusCode;
            },
            getJsonData: () => {
                return jsonData;
            }
        }
    });
};

module.exports = routeDispatcher;