/**
 * Created by CPR199 on 2016-11-18.
 */
var express = require('express'),
    router = express.Router(),
    path = require('path'),
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
        var avatar = req.files.avatar.path.split(path.sep).pop();
        var user = {
            name: name,
            gender: gender,
            bio: bio,
            avatar: avatar
        }
        UserModel.updateUser(id, user).then(function (result) {
            req.flash('success', '修改成功');
            // 跳转到首页
            res.redirect('/posts');
        }).catch(next);
    })


module.exports = router;