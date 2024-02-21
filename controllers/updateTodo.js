const todo = require("../models/todo");

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const response = await todo.findByIdAndUpdate({ _id: id }, { title, description, updatedAt: Date.now() });
        res.status(200).json({
            success: true,
            data: response,
            message: `data updated successfully at id ${id}`
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