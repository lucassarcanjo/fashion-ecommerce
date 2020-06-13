export const getApiData = async (url) => {
  return fetch(url, {
    method: "GET",
  }).then((res) => res.json());
};
