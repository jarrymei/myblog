/**
 * Created by CPR199 on 2016-11-18.
 */
var express = require('express'),
    router = express.Router(),
    UserModel = require('../models/users');

    //编辑页面
    router.get('/:id', function (req, res, next) {
        var id = req.params.id;
        UserModel.getUserById(id).then(function (user) {
            delete user.password;
            res.render('edit_user', {
                user: user,
                flag: 'edit'
            })
        })
    })

router.post('/:id', function (req, res ,next) {
    var id = req.params.id;
    var name = req.fields.name;
    var gender = req.fields.gender;
    var bio = req.fields.bio;
    var user = {
        id: id,
        name: name,
        gender: gender,
        bio: bio
    }
    UserModel.updateUser(user).then(function (result) {
        req.flash('success', '修改成功');
        // 跳转到首页
        res.redirect('/posts');
    }).catch(next);
})


module.exports = router;