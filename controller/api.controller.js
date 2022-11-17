const { hiddenwarrionService } = require("../service")

module.exports = {
    helloWorld: async (req,res) => {
        const { kahootid } = req.params
        data = await hiddenwarrionService.defaultKahoot(kahootid)
        res.json(data)
    }
}