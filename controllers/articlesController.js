//GET - AFFICHE LA LISTE DES ARTICLES
exports.getArticlesPage = async (req,res)=>{
    const listeDesArticles = await querysql('SELECT * FROM article;')
    //console.log('articles :',listeDesArticles[0].image);
    res.render('articles',{articles: listeDesArticles})
}

//GET - AFFICHE UN ARTICLE
exports.getSingleArticlePage = async (req,res)=>{
    const id = req.params.id
    const articleSingle = await querysql("SELECT * FROM article WHERE articleId = '" + id + "'; ")
    //console.log(articleSingle);
    res.render('articleSingle', {article : articleSingle [0]})
}




