const axios = require("axios")
const { API_SCHEDULE, API_KAHOOT } = require("../config/config")
const { getApi } = require("../helper")


module.exports = {
    defaultKahoot: async (kahootid) => {
        data = getApi.getUrl(`${API_KAHOOT}/${kahootid}`)
        return data['questtions']
    }
    
}