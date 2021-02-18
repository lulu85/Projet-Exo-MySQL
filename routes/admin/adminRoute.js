const router = require('express').Router()
const adminController = require('../../controllers/admin/adminController')
const articlesAdminController = require('../../controllers/admin/articlesAdminController')

//PAGE ADMINISTRATION
//GET
router.get('/', adminController.getAdminPage)

//-----------------------------------Pages des articles---------------------------
//PAGE ADMIN ARTICLES
router.get('/liste-des-articles', articlesAdminController.getArticlesAdmin)

//AFFICHE LE FORMULAIRE D'UN ARTICLE
router.get('/liste-des-articles/ajouter', articlesAdminController.getAddArticleAdmin)

//AJOUTER UN ARTICLE
router.post('/liste-des-articles/ajouter', articlesAdminController.postAddArticleAdmin)


module.exports = router