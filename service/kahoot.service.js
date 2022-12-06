const { API_KAHOOT } = require('../config/config');
const { getApi } = require('../helper');

module.exports = {
    getKahootData: (kahootid) => getApi.getUrl(`${API_KAHOOT}${kahootid}`)
};
