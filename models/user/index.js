const {User} = require("./mongoose-sch");
const {userRegisterSchema ,userLoginSchema} = require("./joi-sch");


module.exports = {
    User,
    userRegisterSchema,
    userLoginSchema,
}