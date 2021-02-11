const router = require('express').Router
const articleController = require('../controllers/articlesController')

//PAGE DES ARTICLES
router.get('/', articleController.getArticlesPage)

//router.get('/:id',)