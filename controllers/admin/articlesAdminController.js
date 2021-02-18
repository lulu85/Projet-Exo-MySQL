exports.getArticlesAdmin = async (req, res) => {
    const articlesTotal = await querysql('SELECT COUNT(*) AS total FROM article')
    const articlesAdmin = await querysql('SELECT article.titre, article.image, article.description, auteur.nom FROM article INNER JOIN auteur ON article.articleId = auteur.auteurID')
    res.render('admin/articlesAdmin',{articles: articlesAdmin,total : articlesTotal[0].total})
} 