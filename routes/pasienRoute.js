'use strict'
const express = require('express')
const pasien = require('../controllers/pasienController')
const { verifyToken } = require("../middleware/verify")
const router = express.Router()

router.get(`/api/v1/pasien`, verifyToken, pasien.index)
router.post(`/api/v1/pasien`, verifyToken, pasien.store)
router.get(`/api/v1/pasien/:id`, verifyToken, pasien.show)
router.put(`/api/v1/pasien/:id`, verifyToken, pasien.update)
router.delete(`/api/v1/pasien/:id`, verifyToken, pasien.destroy)

module.exports = router