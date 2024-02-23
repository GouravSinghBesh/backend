const Comment = require("../models/commentmodel");
const Post = require("../models/postmodel")

exports.commentPost = async (req,res)=>{
    try {
        const {body,user,post} = req.body;
        const comment =  new Comment({
            body,user,post,
        })
        const savedcomment = await comment.save();

        const updatedcomment = await Post.findByIdAndUpdate(post,{$push : {comments : savedcomment._id}},{new:true}).populate("likes").populate("comments").exec();

        res.json({
            post : updatedcomment
        })
    } 
    catch (error) {
        return res.status(400).json({
            error : "error while creating comment"
        })
    }
}