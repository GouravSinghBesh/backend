const express = require("express");
const router = express.Router();

const {createPost,getAllPosts} = require("../controllers/postController");
const {likePost,unlikePost} = require("../controllers/likeController")
const {commentPost} = require("../controllers/commentController")

router.post("/posts/createpost",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);
router.post("/comments/create",commentPost);

module.exports = router;