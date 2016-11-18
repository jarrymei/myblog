var User = require('../lib/mongo').User;

module.exports = {
    // 注册一个用户
    create: function create(user) {
        return User.create(user).exec();
    },

    // 通过用户名获取用户信息
    getUserByName: function getUserByName(name) {
        return User
            .findOne({ name: name })
            .addCreatedAt()
            .exec();
    },

    //通过用户id获取用户
    getUserById: function getUserById(id) {
        return User
            .findOne({_id: id})
            .addCreatedAt()
            .exec();
    },

    //更新用户信息
    updateUser: function updateUser(user) {
        return User
            .update({_id: user._id},{$set: {"name": user.name, "gender": user.gender, "bio": user.bio}})
            .addCreatedAt()
            .exec();
    }
};