module.exports = {
    helloWorld: (req,res) => {
        a = 1
        b = 2
        c = a + b
        res.json('Hello Node js')
    }
}