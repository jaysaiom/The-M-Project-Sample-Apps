// ==========================================================================
// Project:   The M-Project - Mobile HTML5 Application Framework
// Copyright: (c) 2010 M-Way Solutions GmbH. All rights reserved.
// Creator:   Dominik
// Date:      26.10.2010
// License:   Dual licensed under the MIT or GPL Version 2 licenses.
//            http://github.com/mwaylabs/The-M-Project/blob/master/MIT-LICENSE
//            http://github.com/mwaylabs/The-M-Project/blob/master/GPL-LICENSE
// ==========================================================================

m_require('core/foundation/request.js');

/**
 * A constant value for logging level: debug.
 *
 * @type Number
 */
M.DEBUG = 0;

/**
 * A constant value for logging level: error.
 *
 * @type Number
 */
M.ERROR = 1;

/**
 * A constant value for logging level: warning.
 *
 * @type Number
 */
M.WARN = 2;

/**
 * A constant value for logging level: info.
 *
 * @type Number
 */
M.INFO = 3;

/**
 * @class
 *
 * M.Logger defines the prototype for any logging object. It is used to log messages out of the application
 * based on a given logging level.
 *
 * @extends M.Object
 */
M.Logger = M.Object.extend(
/** @scope M.Logger.prototype */ {

    /**
     * The type of this object.
     *
     * @type String
     */
    type: 'M.Logger',

    /**
     * This method is used to log anything out of an application based on the given logging level.
     * Possible values for the logging level are:
     *
     * - debug:   M.DEBUG
     * - error:   M.ERROR
     * - warning: M.WARN
     * - info: M.INFO
     *
     * @param {String} msg The logging message.
     * @param {Number} level The logging level.
     */
    log: function(msg, level) {
        level = level || M.DEBUG;

        /* Prevent a console.log from blowing things up if we are on a browser that doesn't support this. */
        if (typeof console === 'undefined') {
            window.console = {} ;
            console.log = console.info = console.warn = console.error = function(){};
        }
        
        switch (level) {
            case M.DEBUG:
                this.debug(msg);
                break;
            case M.ERROR:
                this.error(msg);
                break;
            case M.WARN:
                this.warn(msg);
                break;
            case M.INFO:
                this.info(msg);
                break;
            default:
                this.debug(msg);
                break;
        }
    },

    /**
     * This method is used to log a message on logging level debug.
     *
     * @private
     * @param {String} msg The logging message.
     */
    debug: function(msg) {
        console.debug(msg);
    },

    /**
     * This method is used to log a message on logging level error.
     *
     * @private
     * @param {String} msg The logging message.
     */
    error: function(msg) {
        console.error(msg);
    },

    /**
     * This method is used to log a message on logging level warning.
     *
     * @private
     * @param {String} msg The logging message.
     */
    warn: function(msg) {
        console.warn(msg);
    },

    /**
     * This method is used to log a message on logging level info.
     *
     * @private
     * @param {String} msg The logging message.
     */
    info: function(msg) {
        console.info(msg);
    }

});