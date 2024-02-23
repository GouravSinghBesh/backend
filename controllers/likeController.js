const Like = require("../models/likemodel")
const Post = require("../models/postmodel")

exports.likePost = async (req, res) => {
    try {
        const { user, post } = req.body;
        const likepost = new Like({ user, post });
        const savedLiked = await likepost.save();

        const updatedLike = await Post.findByIdAndUpdate(post, { $push: { likes: savedLiked._id } }, { new: true }).populate("likes").populate("comments").exec();

        res.json({
            post: updatedLike
        })
    }
    catch (error) {
        return res.status(400).json({
            error: "error while liking post"
        })
    }

}

exports.unlikePost = async (req, res) => {
    try {
        const { post, like } = req.body;
        const unlike = await Like.findOneAndDelete({ post: post, _id: like })

        const updatedunlike = await Post.findByIdAndUpdate(post, { $pull: { likes: unlike._id } }, { new: true });
        res.json({
            post : updatedunlike
        })
    }
    catch (error) {
        return res.status(400).json({
            error: "error while unliking post"
        })
    }


}