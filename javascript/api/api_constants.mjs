
/**
 * BASE API's:
 * These are the bsae API-routes, and are used by putting together to form different API-routes.
 */

export const API_HOST_URL = "https://api.noroff.dev";
export const API_CURRENT_VERSION = "/api/v1";
export const API_SOCIAL_ENDPOINT = "/social";
export const API_SOCIAL_POSTS_ENDPOINT = "/posts";


/**
 * API-ROUTES:
 * API-routes used for functions in other Javascript files
 */

export const API_BASE_SOCIAL_URL = `${API_HOST_URL}${API_CURRENT_VERSION}${API_SOCIAL_ENDPOINT}`;
export const API_SOCIAL_POST_URL = `${API_BASE_SOCIAL_URL}${API_SOCIAL_POSTS_ENDPOINT}`;