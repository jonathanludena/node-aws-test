const express = require("express");
const {
  getList,
  getDetail,
  createVideo,
  updateVideo,
  deleteVideo,
} = require("../controllers/videos.controller");
const { checkSession } = require("../middleware/session.middleware");

const router = express.Router();

/**
 * Lista de videos
 * [endpoint] => GET http://localhost:3001/videos
 */
router.get("/", getList);

/**
 * Detalle de video por ID
 * [endpoint] => GET http://localhost:3001/videos/1
 */
router.get("/:id", getDetail);

/**
 * Insertar un video
 * [endpoint] => POST http://localhost:3001/videos
 */
router.post("/", createVideo);

/**
 * Actualiza video por id
 * [endpoint] => PUT http://localhost:3001/videos/1
 */
router.put("/:id", updateVideo);

/**
 * Elimina un video por ID
 * [endpoint] => DELETE http://localhost:3001/videos/1
 * example with middleware session
 */
router.delete("/:id", checkSession, deleteVideo);

module.exports = router;
