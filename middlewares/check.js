/**
 * Created by CPR199 on 2016-11-15.
 */

module.exports = {
    checkLogin: function (req, res, next) {
        if (!req.session.user) {
            req.flash('error', '未登录');
            return res.redirect('/signin');
        }
        next();
    },

    checkNotLogin: function (req, res, next) {
        if (req.session.user) {
            req.flash('error', '已登录');
            return res.redirect('back');
        }
        next();
    }

}