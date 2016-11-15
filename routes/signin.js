/**
 * Created by CPR199 on 2016-11-15.
 */
var  express = require('express'),
    router = express.Router();

var checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET /signin 登录页
router.get('/', checkNotLogin, function (req, res, next) {
    res.send(req.flash());
})

// POST /signin 用户登录
router.post('/', checkNotLogin, function(req, res, next) {
    res.send(req.flash());
});

module.exports = router;