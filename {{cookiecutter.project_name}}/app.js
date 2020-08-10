const express = require("express");
const app = express();
const http = require("http").createServer(app);
const port = 4000;
const cors = require("cors");
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser");
const session = require('express-session');

app.use(session({
    secret: 'miSecretoSecretoso',
    resave: false,
    saveUninitialized: true
}))
const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:4000",
    "http://localhost:3001",
    "*"
  ];
  app.use(
    cors({
      origin: function(origin, callback) {
        // allow requests with no origin
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1 || origin===null) {
          var msg =
            "The CORS policy for this site does not " +
            "allow access from the specified Origin.";
          return callback(new Error(msg), false);
        }
        return callback(null, true);
      }
    })
  );
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res, next) => {
  res.render('index');
})

http.listen(port, () =>
  console.log(`{{ cookiecutter.project_name }} running on Port: ${port}!`)
);
