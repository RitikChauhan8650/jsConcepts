async function retryApiCall(url, retries = 3, delay = 1000) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("API returned non-200 response");
    }

    return await res.json();
  } catch (err) {
    if (retries === 0) {
      throw new Error("API failed after max retries: " + err.message);
    }

    console.log(`Retrying... attempts left: ${retries}`);
    await new Promise(res => setTimeout(res, delay));
    return retryApiCall(url, retries - 1, delay);
  }
}

retryApiCall("https://jsonplaceholdr.typicode.com/todos/1")
  .then(console.log)
  .catch(console.error);
