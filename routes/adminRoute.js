const router = require('express').Router()
const adminController = require('../controllers/adminController')

//PAGE DES ARTICLES
//GET
router.get('/', adminController.getAdminPage)

module.exports = router