const axios = require('axios');

module.exports = {
    getUrl: async (url) => {
        const data = await axios.get(url, { responseEncoding: 'utf8' }).then((response) => response.data);
        return data;
    }
};
