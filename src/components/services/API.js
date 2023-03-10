async function getData() {
  try {
    const response = await fetch('http://emet-dev.core.lac/emet.json');
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

export { getData };
