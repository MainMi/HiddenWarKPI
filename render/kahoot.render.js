module.exports = {
    startPageRender: (req,res) => {
        res.render('../view/page/kahootStartPage')
    },
    answersRender: (req,res) => {
        res.render('../view/page/kahootAnswers', {data: req.data})
    }
}