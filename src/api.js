import { stringify } from 'qs';

const apiBase = process.env.REACT_APP_API_ROOT;

async function api(path, data, method = 'GET', { type = 'json', ...extraParams } = {}) {
  let reqBody;
  let params = '';

  if (['GET', 'DELETE'].includes(method)) {
    params = `?${stringify(data)}`;
  } else {
    reqBody = JSON.stringify(data);
  }

  const headers = type === 'json'
    ? {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
    : {};

  const response = await fetch(apiBase + path + params, {
    headers: {
      ...headers,
      'x-access-token': localStorage.getItem('jwt'),
    },
    body: reqBody,
    method,
    ...extraParams,
  });

  const {
    ok,
    statusText,
  } = response || {};

  let body = {};

  if (method !== 'DELETE' && type === 'json') {
    body = await response.json();
  } else {
    body = await response.text();
  }

  if (!ok) {
    throw new Error(`Request to ${path} resulted in a ${statusText} error: ${body.reason}`);
  }

  return body;
}

export async function GET(path, data, extraParams) {
  return api(path, data, 'GET', extraParams);
}

export async function POST(path, data, extraParams) {
  return api(path, data, 'POST', extraParams);
}

export async function DELETE(path, data, extraParams) {
  return api(path, data, 'DELETE', extraParams);
}

export async function PUT(path, data, extraParams) {
  return api(path, data, 'PUT', extraParams);
}

export async function UPDATE(path, data, extraParams) {
  return api(path, data, 'UPDATE', extraParams);
}

export async function handleError(code, { silent } = {}) {
  try {
    const response = await code();
    return response;
  } catch (e) {
    // replace with something...prettier
    // eslint-disable-next-line
    console.error(e);
    if (!silent) {
      // eslint-disable-next-line
      alert(e);
    }

    return null;
  }
}
