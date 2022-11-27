const { API_KAHOOT } = require('../config/config');
const { getApi } = require('../helper');

module.exports = {
    defaultKahoot: async (kahootid) => {
        const data = await getApi.getUrl(`${API_KAHOOT}/${kahootid}`);
        return data.questions;
    }
};
