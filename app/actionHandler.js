/**
 * NodeJS Master Class Homework Assignment #1.
 * 
 * The purpose of this assignmetn is to create a simple "Hello World API".
 * 
 * @author Gilberto Albino
 * @link https://github.com/gilbertoalbino/NodeMasterClassHomeworkAssignment1.git
 */

/**
 * Actions to be dispatched by the router.
 */ 
const actionHandler = {};

/**
 * The hello action.
 * 
 * @param {Function} callback 
 */
actionHandler.hello = callback => {
    callback(200, {
        'message': 'Hello, World!'
    });
};

/**
 * In case no route is found.
 * 
 * @param {Function} callback 
 */
actionHandler.notFound = callback => {
    callback(404, {
        'message': 'Not found'
    });
};

module.exports = actionHandler;