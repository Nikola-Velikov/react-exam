const { verifyToken } = require("../services/authService");
const { getAll, create, getById } = require("../services/blogService");
const blogController = require('express').Router();

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

blogController.get('/', async (req, res) => {
 
    try {
        
        const result = await getAll();
        res.status(200).send({
            success: true,
            result: result
        });
    } catch (err) {
        res.status(400).send({
            success: false,
            error: err.message
        })
    }
})


blogController.post('/create',upload.single('image') ,async (req, res) => {
    console.log('create',req.file.filename);
    try {
        const token = req.headers["x-authorization"];
        const user = verifyToken(token)
        const payload = {
            title: req.body.title,
            shortcont: req.body.shortcont,
            context: req.body.context,
            imageUrl: req.file.filename,
            userId: user._id,
            username: user.username,

        }
        const result = await create(payload);
        res.status(200).send({
            success: true,
            result: result
        });
    } catch (err) {
        res.status(400).send({
            success: false,
            error: err.message
        })
    }
})
blogController.get('/:id', async (req, res) => {
    console.log('GET /games/:id');
    try {
        const token = req.headers["x-authorization"];
       let user =  verifyToken(token);
       
        const result = await getById(req.params.id)
        result.username = user.username
        res.status(200).send({
            success: true,
            result: result
            
        });
    } catch (err) {
        res.status(400).send({
            success: false,
            error: err.message
        })
    }
})

module.exports = blogController;