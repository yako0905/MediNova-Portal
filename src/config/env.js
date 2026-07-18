/**
 * Centralized app configuration.
 *
 * Never read `process.env.*` directly inside components — import
 * from here instead. This keeps environment access in one place
 * and makes it obvious what the app depends on.
 *
 * Set REACT_APP_API_URL in a local .env file (see .env.example).
 * CRA only exposes vars prefixed with REACT_APP_ to the client bundle.
 */

const requiredWithFallback = (value, fallback, name) => {
  if (!value) {
    // eslint-disable-next-line no-console
    console.warn(
      `[config] ${name} is not set — falling back to "${fallback}". ` +
      `Set it in your .env file for production builds.`
    );
    return fallback;
  }
  return value;
};

const config = {
  apiUrl: requiredWithFallback(
  process.env.REACT_APP_API_URL,
  'http://localhost:5001/api',
  'REACT_APP_API_URL'
),
  env: process.env.NODE_ENV || 'development',
};

export default config;