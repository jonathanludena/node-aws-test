const { MOCK_VIDEOS } = require("../models/videos.model");

const getAllVideos = () => {
  return MOCK_VIDEOS;
};

module.exports = { getAllVideos };
