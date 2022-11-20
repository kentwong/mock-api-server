// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// status variables
let endpoint1Status = 200;
let endpoint2Status = 200;
let endpoint3Status = 201;

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(
  jsonServer.rewriter({
    "/users": "/endpoint1",
    "/stocks": "/endpoint2",
    "/weather": "/endpoint3",
  })
);

server.post("/statusform", (req, res) => {
  console.log("this is req", req.body);
  endpoint1Status = req.body?.userStatus || endpoint1Status;
  endpoint2Status = req.body?.stockStatus || endpoint2Status;
  endpoint3Status = req.body?.weatherStatus || endpoint3Status;
  res.status(200).jsonp({
    message: "status updated",
  });
});

server.get("/endpoint1", (req, res, next) => {
  if (endpoint1Status === "400") {
    res.status(400).jsonp({
      error: "400",
    });
  } else if (endpoint1Status === "404") {
    res.status(404).jsonp({
      error: "404",
    });
  } else if (endpoint1Status === "500") {
    res.status(500).jsonp({
      error: "500",
    });
  }
  next();
});

server.get("/endpoint2", (req, res, next) => {
  if (endpoint2Status === "400") {
    res.status(400).jsonp({
      error: "400",
    });
  } else if (endpoint2Status === "404") {
    res.status(404).jsonp({
      error: "404",
    });
  } else if (endpoint2Status === "500") {
    res.status(500).jsonp({
      error: "500",
    });
  }
  next();
});

server.post("/endpoint3", (req, res, next) => {
  if (endpoint3Status === "400") {
    res.status(400).jsonp({
      error: "400",
    });
  } else if (endpoint3Status === "404") {
    res.status(404).jsonp({
      error: "404",
    });
  } else if (endpoint3Status === "500") {
    res.status(500).jsonp({
      error: "500",
    });
  }
  next();
});

server.use(router);
server.listen(5000, () => {
  console.log("Mock API Server is running");
});
