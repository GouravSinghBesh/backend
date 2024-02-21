const todo = require("../models/todo")

exports.deleteTodo = async(req,res)=>{
    try {
        const id = req.params.id;
        await todo.findByIdAndDelete(id);
        res.status(200).json({
            success : true,
            message : `data at id ${id} is deleted successfully`
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "error occured"
        })
        console.log(error)
        console.log("error occured")
    }
}