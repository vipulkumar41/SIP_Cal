const express = require("express")
const router = express.Router()
const srv = require("../controllers/index")

// SIP Calculation
router.post("/sipCalculator", srv.sip)

module.exports = router
