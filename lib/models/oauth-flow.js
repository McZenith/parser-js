const { addExtensions } = require('../utils');
const Base = require('./base');

/**
 * Implements functions to deal with a OAuthFlow object.
 * @class
 * @alias module:@asyncapi/parser#OAuthFlow
 * @extends Base
 * @returns {OAuthFlow}
 */
class OAuthFlow extends Base {
  /**
   * @returns {string}
   */
  authorizationUrl() {
    return this._json.authorizationUrl;
  }

  /**
   * @returns {string}
   */
  tokenUrl() {
    return this._json.tokenUrl;
  }

  /**
   * @returns {string}
   */
  refreshUrl() {
    return this._json.refreshUrl;
  }

  /**
   * @returns {Object<string, string>}
   */
  scopes() {
    return this._json.scopes;
  }
}

module.exports = addExtensions(OAuthFlow);
