const axios = require('axios');

module.exports = {
    getUrl: async (url) => {
        const data = await axios.get(url).then((response) => response.data);
        return data;
    }
};
