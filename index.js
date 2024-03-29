const express = require("express");
const cors = require("cors");
// Auth middleware: our own code. Checks for the existence of a token in a header called `authentication`.
const authMiddleWare = require("./auth/middleware");
const auth = require("./routers/auth");
const home = require("./routers/home");
const blogs = require("./routers/blogs");
const { PORT } = require("./config/constants");

// Create an express app
const app = express();

const corsOptions = {   
  origin: "*",   
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",   
  allowedHeaders:
  "Access-Control-Allow-Headers,Access-Control-Allow-Origin,Access-Control-Request-Method,Access-Control-Request-Headers,Origin,Cache-Control,Content-Type,X-Token,X-Refresh-Token",   
  credentials: true,   
  preflightContinue: false,  
  optionsSuccessStatus: 204 }
app.options('*', cors())
app.use(cors(corsOptions));

// express.json():be able to read request bodies of JSON requests a.k.a. body-parser
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

/**
 * Routes
 *
 * Define your routes and attach our routers here (now that middlewares are configured)
 */

app.use("/auth", auth);
app.use("/", home);
app.use("/blogs", blogs);

// POST endpoint which requires a token for testing purposes, can be removed
app.post("/authorized_post_request", authMiddleWare, (req, res) => {
  // accessing user that was added to req by the auth middleware
  const user = req.user;
  // don't send back the password hash
  delete user.dataValues["password"];

  res.json({
    youPosted: {
      ...req.body,
    },
    userFoundWithToken: {
      ...user.dataValues,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
