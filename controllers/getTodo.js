const todo = require("../models/todo");

exports.getTodo = async(req,res)=>{
    try {
        const todos = await todo.find({});
        res.status(200).json({
            success:true,
            data:todos,
            message : "fetched successfully"
        })
    } 
    catch (error) {
        res.status(500).json({
            success : false,
            message : "error occured"
        })
        console.log(error)
        console.log("error occured")
    }
}

exports.getTodoById = async(req,res) => {
    try {
        const id = req.params.id;
        const Todo = await todo.findById({_id: id});
        if(!Todo){
            return res.status(404).json({
                success : false,
                message: "Not found"
            })
        }
        res.status(200).json({
            success : true,
            data : Todo,
            mesage : `data on ${id} fetched successfully`
        })
    } 
    catch (error) {
        res.status(500).json({
            success : false,
            message : "error occured"
        })
        console.log(error)
        console.log("error occured")
    }
    }
