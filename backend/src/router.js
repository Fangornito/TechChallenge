const express = require("express");

const router = express.Router();

const argonauteControllers = require("./controllers/argonauteControllers");

router.get("/argonaute", argonauteControllers.browse);
router.post("/argonaute", argonauteControllers.add);
router.delete("/argonaute/:id", argonauteControllers.destroy);

module.exports = router;
