exports.getArticlesAdmin = async (req, res) => {
    const ArticlesAdmin = await querysql('SELECT * FROM article')
    res.render('admin/articlesAdmin',{artices: AriclesAdmin})
} 