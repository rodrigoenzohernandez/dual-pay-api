const axios = require('axios');

async function fetchData(res, url, config) {
  try {
    const response = await axios.get(`${url}`, config);
    return response.data;
  } catch (error) {
    res.status(error.response.data.statusCode);
    return error.response.data;
  }
}

module.exports = async function get(res, url, config) {
  return fetchData(res, url, config);
};
