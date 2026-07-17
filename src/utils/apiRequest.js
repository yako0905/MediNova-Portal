import config from '../config/env';

/**
 * Thin wrapper around fetch that prefixes the configured API URL.
 * Usage: apiRequest('/appointments', { method: 'POST', body: {...} })
 */
export const apiRequest = async (path, { method = 'GET', body, headers = {} } = {}) => {
  const response = await fetch(`${config.apiUrl}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
};

export default apiRequest;