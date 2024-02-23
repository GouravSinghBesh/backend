const Post = require("../models/postmodel");

exports.createPost = async (req, res) => {
    try {
        const { title, body } = req.body;
        const post = new Post({ title, body });
        const savedPost = await post.save();

        res.json({
           post :  savedPost,
        })
    }
    catch (error) {
        return res.status(400).json({
            error : "error while creating post"
        })
    }

}

exports.getAllPosts = async (req,res)=>{
    try {
        const allPosts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            posts : allPosts
        })
    } 
    catch (error) {
        return res.status(400).json({
            error : "error while fetching all post"
        })
    }
   
}