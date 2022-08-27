
const PostComp = require("../models/PostComp");

exports.postController = async(req,res) =>{


  const { title,
   
    description, image } = req.body;


    try {
    const newPost = new PostComp();
   
   newPost.uid=Date.now(),
    newPost.title=title,
    newPost.image=image,
    newPost.description =description,
   
  
    

    await newPost.save();
    res.json({
      successMessage: "Blog has been posted !",
    });
    }
    catch (err) {
      console.log("postController error: ", err);
      res.status(500).json({
        errorMessage: "Server error",
      });
    }
};