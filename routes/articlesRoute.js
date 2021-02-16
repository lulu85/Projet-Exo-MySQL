const router = require('express').Router()
const articlesController = require('../controllers/articlesController')

//PAGE DES ARTICLES
//GET
router.get('/', articlesController.getArticlesPage)//URL est localhost:3000/liste-des-articles/

router.get('/article/:id', articlesController.getSingleArticlePage )//URL est localhost:3000/liste-des-articles/article/1(:id)

module.exports = router
