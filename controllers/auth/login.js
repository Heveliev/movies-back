const bcrypt = require("bcrypt");
const {User} = require("../../models");
const {HttpError} = require("../../helpers");



const login = async(req, res, next) => {
    const {email, password} = req.body;

        const user = await User.findOne({email});

        if(!user) {
            throw new HttpError(401,"Email or password is incorrect");
        }

        const passwordCompare = await bcrypt.compare(password, user.password);

        if(!passwordCompare) {
            throw new HttpError(401,"Email or password is incorrect");
        }

        const token = "TOKEN";

        res.json({
            token,
            user: {
                name: user.name,
                email: user.email,
            }
        });

}

module.exports = {login};