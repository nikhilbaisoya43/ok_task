const NodeCache = require("node-cache");
const ONE_HOUR_LIMIT = 60 * 60;
const cacheInstance = new NodeCache({ stdTTL: ONE_HOUR_LIMIT });

module.exports = cacheInstance;
