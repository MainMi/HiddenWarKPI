const axios = require("axios")
const { API_ROZKLAD } = require("../config/config")
const { getApi } = require("../helper")


module.exports = {
    defaultRozklad: async (req,res) => {
        res.json(await getApi.getUrl(API_ROZKLAD))
    }
}