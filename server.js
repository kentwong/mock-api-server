// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// status variables
let userStatus;
let weatherStatus;
let itemStatus;

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(
  jsonServer.rewriter({
    "/api": "/users",
  })
);

server.post("/statusform", (req, res) => {
  console.log("this is req", req.body.name);
  userStatus = req.body?.userStatus;
  weatherStatus = req.body?.weatherStatus;
  itemStatus = req.body?.itemStatus;
  res.status(200).jsonp({
    message: "status updated",
  });
});

server.use(router);
server.listen(5000, () => {
  console.log("JSON Server is running");
});

router.render = (req, res) => {
  if (reqStatus === "200") {
    res.status(200).jsonp({
      error: "200",
    });
  } else if (reqStatus === "400") {
    res.status(400).jsonp({
      error: "400",
    });
  } else if (reqStatus === "404") {
    res.status(404).jsonp({
      error: "404",
    });
  } else if (reqStatus === "500") {
    res.status(500).jsonp({
      error: "500",
    });
  }
};
