/**
 * Minimal fetch-wrapper för konsekvent API-hantering.
 * Kräver VITE_API_BASE_URL i .env
 */
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

async function request(path, { method = "GET", headers = {}, body } = {}) {
  if (!BASE_URL) {
    console.warn("VITE_API_BASE_URL saknas. Sätt den i .env");
  }
  const url = `${BASE_URL || ""}${path}`;
  const opts = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };
  if (body !== undefined) {
    opts.body = typeof body === "string" ? body : JSON.stringify(body);
  }
  const res = await fetch(url, opts);
  const text = await res.text();
  let data;
  try {
    data = text ? JSON.parse(text) : null;
  } catch (e) {
    data = text;
  }
  if (!res.ok) {
    const err = new Error("API error");
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

export const api = {
  get: (path, opts) => request(path, { method: "GET", ...(opts || {}) }),
  post: (path, body, opts) =>
    request(path, { method: "POST", body, ...(opts || {}) }),
  put: (path, body, opts) =>
    request(path, { method: "PUT", body, ...(opts || {}) }),
  del: (path, opts) => request(path, { method: "DELETE", ...(opts || {}) }),
};
