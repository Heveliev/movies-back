
const getCurrent = async (req, res) => {
    const {email, name} = req.user;
    console.log(req.user);

    res.json({
        email,
        name,
    })
}


module.exports = {getCurrent};