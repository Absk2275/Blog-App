const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    uid:{
      type:String,
     },
    title: {
      type: String,
      required: true,
    },
    image:{
      type:String,
    },
   
      description: {
        type: String,
        required: true,
      },
     
     

      
  },
  { timestamps: true }
);

const PostComp = mongoose.model("Postblog", PostSchema);
module.exports = PostComp;