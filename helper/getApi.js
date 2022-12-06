const axios = require('axios');

let config = {
    method: 'GET',
    url: `url`,
    headers: {
        'Accept-Encoding': 'application/json'
    }
}

module.exports = {
    getUrl: async (url) => {
        const data = await axios.request({...config, url}).then((response) => response.data);
        return data;
    }
};
