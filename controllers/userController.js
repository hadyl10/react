const User = require('../models/userModel')

module.exports = {

    register: () => {
        User.create(req.body, (err, user) => {
            if (err) {
                res.status(500).json('error register user')
            } else {
                res.status(200).json('success register user')
            }
        })
    }

}