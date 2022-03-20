const Author = require("../models/author.model")

module.exports = {

    findAllAuthors: (req, res)=>{
        Author.find().sort({name:1})
            .then((allAuthors)=>{
                console.log(allAuthors)
                res.json(allAuthors)
            })
            .catch((err)=>{
                console.log("Find all authors has failed")
                res.json({message: "Someting went wrong in findAllAuthors", error: err})
            })
    },

    createNewAuthor: (req, res)=>{
        Author.create(req.body)
            .then((newAuthor)=>{
                console.log(newAuthor)
                res.json(newAuthor)
            })
            .catch((err)=>{
                console.log("Something went wrong in createNewAuthor")
                res.status(400).json(err)
            })
    },

    findOneAuthor: (req, res)=>{
        Author.findOne({_id: req.params.id})
            .then((oneAuthor)=>{
                console.log(oneAuthor)
                res.json(oneAuthor)
            })
            .catch((err)=>{
                console.log("findOneAuthor has failed!")
                res.json({message: "Someting went wrong in findOneAuthor", error: err})
            })
    },

    deleteOneAuthor: (req, res)=>{
        Author.deleteOne({_id: req.params.id})
        .then((deleteOneAuthor)=>{
            res.json(deleteOneAuthor)
        })
        .catch((err)=>{
            console.log("deleteOneMovies has failed!")
            res.json({message: "Something went wrong in deleteOneAuthor", error: err})
        })
    },

    updateAuthor: (req, res)=>{
        Author.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
            )
            .then((updatedAuthor)=>{
                console.log(updatedAuthor)
                res.json(updatedAuthor)
            })
            .catch((err)=>{
                console.log("Something went wrong in updateAuthor")
                res.status(400).json(err)
            })
    }
}