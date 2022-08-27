const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./database/db");
const morgan = require("morgan");
const authRoutes = require("./routes/auth");
const PostComp = require("./models/PostComp");


// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/auth", authRoutes);

connectDB();

app.get("/", (req, res) => {
  res.send("Inside Server");
});

//getting complint
app.route("/postblog").get((req, res) => {
  PostComp.find({}, (err, postblog) => {
    if (err) {
      res.send(err);
    }
    res.json(postblog);
  });
});



const port = process.env.PORT || 5000;

app.listen(port, () => console.log("listening on port " + port));
