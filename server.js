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
app.route("/postcomp").get((req, res) => {
	PostComp.find({}, (err, postcomp) => {
		if (err) {
			res.send(err);
		}
		res.json(postcomp);
	});
});

//getting complaint by id
app.route("/postcomp/:postcompID").get((req, res) => {
	PostComp.findById(req.params.postcompID, (err, postcomp) => {
		if (err) {
			res.send(err);
		}
		res.json(postcomp);
	});
});

// updating complaint by ID
app.route("/postcomp/:postcompID").put((req, res) => {
	PostComp.findOneAndUpdate(
		{ _id: req.params.postcompID },
		req.body,
		{ new: true, useFindAndModify: false },
		(err, postcomp) => {
			if (err) {
				res.send(err);
			}
			res.json(postcomp);
		}
	);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("listening on port " + port));
