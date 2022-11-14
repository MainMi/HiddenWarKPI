const axios = require("axios")



module.exports = {
    getUrl: async (url) => {
        let data = await axios.get(url).then(function(response) {
            return response.data
        })
        return data
    }
}