'use strict'
const express = require('express')
const pasien = require('./pasienRoute')
const auth = require('./authRoutes')
const router = express.Router()

router.get(`/api/v1/`, (_req, res) => {
    res.json({
        "message": "Welcome to restfullapi"
    })
})

router.use(pasien)
router.use(auth)


module.exports = router;