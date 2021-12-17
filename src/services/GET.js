const axios = require('axios');

async function fetchData(res, url) {
  try {
    const response = await axios.get(`${url}`);
    return response.data;
  } catch (error) {
    res.status(error.response.data.statusCode);
    return error.response.data;
  }
}

module.exports = async function get(res, url) {
  return fetchData(res, url);
};
