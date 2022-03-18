const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

//endpoints
const ArtistRoutes = require("./src/api/artists/artists.routes");
const SongRoutes = require("./src/api/songs/songs.routes");
const AlbumRoutes = require("./src/api/albums/albums.routes");
const UserRoutes = require("./src/api/users/users.routes");

const { connect } = require("./src/utils/database/db");

const { configCloudinary } = require("./src/utils/cloudinary/config");

const PORT = process.env.PORT || 8083;

const app = express();

connect();

configCloudinary();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(cors());

app.get("/", (req, res) => {
  res.send("Bienvenido al server de musica");
});

//rutas
app.use("/artist", ArtistRoutes);
app.use("/song", SongRoutes);
app.use("/album", AlbumRoutes);
app.use("/user", UserRoutes);

app.use("*", (req, res, next) => {
  const error = new Error();
  error.status = 404;
  error.message = "Route not found";
  return next(error);
});

app.use((error, req, res, next) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Unexpected error");
});

const server = app.listen(PORT, () => {
  console.log(`Server listening on port : ${PORT}`);
});

app.use((req, res, next) => {
  setImmediate(() => {
    next(new Error("Something went wrong"));
  });
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
