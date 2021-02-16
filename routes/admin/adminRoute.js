const router = require('express').Router()
const adminController = require('../../controllers/admin/adminController')
const articlesAdminController = require('../../controllers/admin/articlesAdminController')

//PAGE ADMINISTRATION
//GET
router.get('/', adminController.getAdminPage)

//PAGE ADMIN ARTICLES
router.get('/liste-des-articles', articlesAdminController.getArticlesAdmin)

module.exports = router