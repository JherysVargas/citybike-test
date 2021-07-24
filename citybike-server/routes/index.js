const express = require("express");
const router = express.Router();
const CityBikesController = require('../controllers')

router.get("/", async (req, res) => {
  const response = await CityBikesController.getData(req.io);
  res.json(response).status(200);
});

module.exports = router;