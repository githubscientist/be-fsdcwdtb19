const userController = {
    getAllUsers: (req, res) => {
        res.send('GET: All Users');
    }
}

module.exports = userController;