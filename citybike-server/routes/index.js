const express = require("express");
const router = express.Router();

const citybikeurl = "http://api.citybik.es/v2/networks/decobike-miami-beach";

router.get("/", (req, res) => {
  req.io.emit('updateData', { data: 'Hola soy una prueba' });
  res.send({ response: "I am alive" }).status(200);
});
module.exports = router;