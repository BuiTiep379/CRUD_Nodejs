exports.homeRouter = (req, res, next) => {
    res.render('index')
}
exports.updateRouter = (req, res, next) => {
    res.render('update_user')
}
exports.addRouter = (req, res, next) => {
    res.render('add_user')
}