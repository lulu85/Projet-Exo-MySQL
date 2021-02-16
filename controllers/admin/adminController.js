exports.getAdminPage = async (req,res)=>{
    //const adminPage = await querysql('SELECT * FROM article;')
    //console.log('articles :',listeDesArticles[0].image);
    res.render('admin/admin')

}