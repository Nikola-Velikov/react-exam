const { register, getAllUsers, getUserById, login, getById } = require('../services/authService');
const authContoller = require('express').Router();


authContoller.post('/register', async function (req, res) {
    console.log('POST /register',req.body);
    try {
        const payload = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            
        }
        const user = await register(payload);
        res.send(JSON.stringify({
            result: user,
            success: true,
        }));
    } catch (err) {
        console.log(err.message);
        res.send(JSON.stringify({
            success: false,
            error: err.message,
        }));
    }
});

authContoller.post('/login', async (req, res) => {
    console.log('logingggg');
    const loginUser = {
        email: req.body.email,
        password: req.body.password,
    }
    try {
        const user = await login(loginUser);
        res.send({
            success: true,
            result: user,
        })

    } catch (err) {
        res.send({
            success: false,
            error: err.message
        })
    }

})

authContoller.get('/users/:id', async (req, res) => {
    console.log('GET /users/:id');
    const user = await getUserById(req.params.id);
    res.send({ success: true, result: user });
});


module.exports = authContoller;