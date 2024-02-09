const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {User} = require("../../models");
const {HttpError} = require("../../helpers");

const {SECRET_KEY} = process.env;

const expiresIn = "23h";


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

        const {_id:id} = user;

        const payload = {
            id,
        }

        const token = jwt.sign(payload, SECRET_KEY, {expiresIn});
        await User.findByIdAndUpdate(id, {token});

        res.json({
            token,
            user: {
                name: user.name,
                email: user.email,
            }
        });

}

module.exports = {login};