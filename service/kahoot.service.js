const { API_KAHOOT } = require('../config/config');
const { getApi } = require('../helper');

module.exports = {
    getKahootData: async ( kahootid ) => {
        const data = await getApi.getUrl(`https://play.kahoot.it/rest/kahoots/d640fb82-0d8d-4279-9789-0d81a4fbda91`);
        
        return data;
    }
};
