/*
 * Custom Async function for default browser fetch api
 */
export default async function fetchAPI(url, options) {
  try {
    const response = await fetch(url, options);

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return {
        status: "error",
        message: "Login failed! wrong username or password.",
      }
    }
    const json = await response.json();
    return json;
    

  } catch (error) {
    return {
      status: "error",
      message: "NetworkError when attempting to fetch resource",
    }
  }
}
