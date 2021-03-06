const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts')


router.get('/', postController.getAllPosts)
router.get('/:id', postController.getById)
router.post('/new', postController.post)


module.exports = router
