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
var actionHandler = require('./actionHandler');

/**
 * The routes actions to be matched and dispatched
 */
const routesMapping = {
    'hello': actionHandler.hello
};

module.exports = routesMapping;