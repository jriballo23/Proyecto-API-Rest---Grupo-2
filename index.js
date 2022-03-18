const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

//endpoints
const ArtistRoutes = require("./src/api/artists/artists.routes");
const SongRoutes = require("./src/api/songs/songs.routes");
const AlbumRoutes = require("./src/api/albums/albums.routes");

const { connect } = require("./src/utils/database/db");

connect();

const app = express();

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(cors());

//rutas
app.use("/artist", ArtistRoutes);
app.use("/song", SongRoutes);
app.use("/album", AlbumRoutes);

const PORT = process.env.PORT || 8083;

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
