const SOURCE_URL = 'http://emet-dev.core.lac/emet.json';

async function getData() {
  try {
    return await fetch(SOURCE_URL);
  } catch (error) {
    console.error(error.message);
  }
}

export { getData };
