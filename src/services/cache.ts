import cache from '@services/cache';
import apicache from 'apicache'

const options = {
    debug: true, // if true, enables console output
    defaultDuration: '1 hour', // should be either a number (in ms) or a string, defaults to 1 hour
    enabled: true, // if false, turns off caching globally (useful on dev)
    headerBlacklist: [], // list of headers that should never be cached
    statusCodes: {
        exclude: [], // list status codes to specifically exclude (e.g. [404, 403] cache all responses unless they had a 404 or 403 status)
        include: [], // list status codes to require (e.g. [200] caches ONLY responses with a success/200 code)
    },
    headers: {
        // 'cache-control':  'no-cache' // example of header overwrite
    },
    respectCacheControl: true, // If true, 'Cache-Control: no-cache' in the request header will bypass the cache.
};

// Create cache instance
const cacheInstance = apicache.newInstance(options);

// Export the middleware function generator as the default export
export default cacheInstance.middleware;

// Export the instance itself as a named export for controls (clear, etc.)
export const cacheControl = cacheInstance;