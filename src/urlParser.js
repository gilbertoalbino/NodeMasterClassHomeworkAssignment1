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
const url = require('url');

/**
 * Helper for parsing the URL
 */
const urlParser = {};

/**
 * Parses an URL and returns its path and query string.
 * 
 * @param {string} requestUrl 
 */
urlParser.fromRequest = request => {

    let parsedUrl = url.parse(request.url, true);

    // The URL path to be parsed by
    let path = parsedUrl.pathname.replace(/^\/+|\/+$/g, '');;

    // The URL query string 
    let queryStringObject = parsedUrl.query;

    // Utilities to be used by
    return {
        getPath: () => {
            return path;
        },
        getQueryStringObject: () => {
            return queryStringObject;
        }
    }
};

module.exports = urlParser;