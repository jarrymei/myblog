/**
 * Created by CPR199 on 2016-11-15.
 */
var  express = require('express'),
    sha1 = require('sha1'),

    router = express.Router();

var UserModel = require('../models/users');
var checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET /signin 登录页
router.get('/', checkNotLogin, function (req, res, next) {
    res.render('signin');
})

// POST /signin 用户登录
router.post('/', checkNotLogin, function(req, res, next) {
    var name = req.fields.name;
    var password = req.fields.password;
    password = sha1(password);

    UserModel.getUserByName(name).then(function (user) {
        if (!user){
            req.flash('error', '用户不存在');
            return res.redirect('back');
        }
        if (password != user.password) {
            req.flash('error', '用户名或密码错误');
            return res.redirect('back');
        }
        req.flash('success', '登录成功');
        delete user.password;
        req.session.user = user;
        res.redirect('/posts');
    })
    .catch(next);
});

module.exports = router;