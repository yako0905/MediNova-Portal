import config from '../config/env';

/**
 * Wrapper around fetch that automatically:
 * - Uses the configured API URL
 * - Sends JSON
 * - Includes JWT token (if logged in)
 */
export const apiRequest = async (
  path,
  { method = 'GET', body, headers = {} } = {}
) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${config.apiUrl}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
};

export default apiRequest;