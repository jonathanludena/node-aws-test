const express = require("express");
const fs = require("fs");

const router = express.Router();
const PATH_ROUTER = __dirname;

// IN => video.js
const cleanFilename = (filename) => {
  const clean = filename.split(".")[0]; // [videos, routes, js] => video
  return clean;
};

// TODO [index.js, videos.js] =>
fs.readdirSync(PATH_ROUTER).filter((filename) => {
  const prefixRoute = cleanFilename(filename);

  if (prefixRoute !== "index") {
    console.log(`Cargando ruta... ${prefixRoute}`);
    router.use(`/${prefixRoute}`, require(`./${prefixRoute}.routes.js`));
  }
});

module.exports = { router };
