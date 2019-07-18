const usersCtrl = {};

const User = require('../models/User');

usersCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.send(users);
};

usersCtrl.createUser = async (req, res) => {
    const newUser = new User({
        username: req.body.username
    });

    await newUser.save();
    res.send({
        message: 'User saved'
    });
}

usersCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.send(user);
}

usersCtrl.updateUser = async (req, res) => {
    await User.findOneAndUpdate(req.params.id, req.body);
    res.send({
        message: 'User updated'
    });
}

usersCtrl.deleteUser = async (req, res) => {
    await User.findOneAndDelete(req.params.id);
    res.send({
        message: 'User deleted'
    });
}

module.exports = usersCtrl;