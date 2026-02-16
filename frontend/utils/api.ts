
/**
 * Determines the base URL for API requests.
 * 
 * Logic:
 * 1. If NEXT_PUBLIC_API_URL is set (e.g., via .env.local or build arg), use it.
 * 2. If running in production (where Nginx is likely proxying /api), use relative path '/api'.
 * 3. Default to localhost:8000 for local development.
 */
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || (process.env.NODE_ENV === 'production' ? '/api' : 'http://127.0.0.1:8000');

console.log("API Base URL configured as:", API_BASE_URL);
