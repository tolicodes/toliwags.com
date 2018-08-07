import {
  GET,
} from '../api';

const TEXT_PATHS = {
  aboutMe: '/home-sections/about-me.md',
};

export async function getHomeText() {
  const results = await Promise.all(
    Object.values(TEXT_PATHS).map(path => GET(path, null, { type: 'text' })),
  );

  return Object.keys(TEXT_PATHS).reduce((out, key, index) => ({
    ...out,
    [key]: results[index],
  }), {});
}

export function getClients() {
  return GET('/clients/index.json');
}

export function getNav() {
  return GET('/home-sections/index.json');
}
