const { getAllVideos } = require("../services/videos.service");

const getList = (req, res) => {
  const videos = getAllVideos();
  res.send({ data: videos });
};

const getDetail = (req, res) => {
  res.send({ data: "obtiene detalle de video" });
};

const createVideo = (req, res) => {
  res.send({ data: "inserta un video" });
};

const updateVideo = (req, res) => {
  res.send({ data: "actualiza un video" });
};

const deleteVideo = (req, res) => {
  res.send({ data: "elimina un video" });
};

module.exports = { getList, getDetail, createVideo, updateVideo, deleteVideo };
