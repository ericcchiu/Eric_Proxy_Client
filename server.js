const express = require("express");
const morgan = require("morgan");
const path = require("path");
const axios = require("axios");
const cors = require("cors");
const port = process.env.PORT || 3000;

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.static(path.join(__dirname, "public/dist")));

app.get("/projects/:id", (req, res) => {
  axios
    .get("http://localhost:3002/projects/" + req.params.id)
    .then(project => {
      res.status(200);
      res.json(project.data);
    })
    .catch(err => {
      console.log("Error with GET request to Projects Services from Proxy");
      res.sendStatus(500);
    });
});

app.get("/related", (req, res) => {
  axios
    .get("http://localhost:3004/")
    .then(list => {
      res.status(200);
      res.json(list.data);
    })
    .catch(err => {
      console.log("Error with GET request to Projects Services from Proxy");
      res.sendStatus(500);
    });
});

app.listen(port, () => {
  console.log(`Eric Proxy Server running at: http://localhost:${port}`);
});
