/**
 * Created by CPR199 on 2016-11-15.
 */

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.redirect('/posts');
    });
    app.use('/signup', require('./signup'));
    app.use('/signin', require('./signin'));
    app.use('/signout', require('./signout'));
    app.use('/posts', require('./posts'));
    app.use(function (req, res , next) {
        if (!res.headersSent) {
            res.render('404');
        }
    })
};