const router = require('express').Router()
const articleController = require('../controllers/articlesController')

//PAGE DES ARTICLES
//GET
router.get('/', articleController.getArticlesPage)

module.exports = router
