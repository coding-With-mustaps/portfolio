const { Router } = require("express");
const controller = require("../controller/sendEmailController");

const router = Router();

router.post("/v1/send-email", controller.sendEmail);

module.exports = router;