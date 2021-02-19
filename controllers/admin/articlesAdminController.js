const {query} = require('express')

//AFFICHER LA LISTE DES ARTICLES
exports.getArticlesAdmin = async (req, res) => {
    const articlesTotal = await querysql('SELECT COUNT(*) AS total FROM article')
    const articlesAdmin = await querysql('SELECT article.titre, article.image, article.description, article.articleId, auteur.nom FROM article INNER JOIN auteur ON article.auteurId = auteur.auteurID')
    res.render('admin/articlesAdmin',{articles: articlesAdmin,total : articlesTotal[0].total})
} 


//AFFICHE LE FORMULAIRE D'UN ARTICLE
exports.getAddArticleAdmin = async (req,res)=>{
    const listeDesAuteurs = await querysql('SELECT * FROM auteur')
    res.render('admin/ajouterAdmin', {auteurs: listeDesAuteurs})

}

//AJOUTER UN ARTICLE
exports.postAddArticleAdmin = async (req,res)=>{
    const imageURL = 'https://www.hampshire.police.uk/SysSiteAssets/media/images/hampshire/hc-web-2018-news-1-sml-card.jpg.jpg' 
    const {titre,description,auteurId} = req.body
    //GESTION D'EXCEPTION
    try {
        await querysql('INSERT INTO article (titre,description,auteurId,image) VALUES ("' + titre + '","' + description + '","' + auteurId + '","' + imageURL + '");',
        (err,result)=>{
            if(err) {
                res.send(err)
            } else {
                return res.redirect('/admin/liste-des-articles')
            }
        }
        )
    } catch(err) {
        res.status(400).json({message:err})
    }
}

//AFFICHE LA PAGE POUR MODIFIER UN ARTICLE
exports.getModifierArticleAdmin = async (req,res)=>{
    const listeDesAuteurs = await querysql('SELECT * FROM auteur')
    const articleSingle = await querysql("SELECT * FROM article WHERE articleId = '"+ req.params.id +"';")
    console.log(articleSingle);
    res.render('admin/modifierAdmin', {article: articleSingle[0], auteurs: listeDesAuteurs})
    //console.log("ceci est un id ", req.params.id);
}

//MODIFIER L'ARTICLE
exports.putModifierArticleAdmin = async (req,res)=>{
    const imageURL = 'https://www.hampshire.police.uk/SysSiteAssets/media/images/hampshire/hc-web-2018-news-1-sml-card.jpg.jpg' 
    const {titre,description,auteurId} = req.body
    
    //GESTION D'EXCEPTION
    try {
        await querysql("UPDATE article SET titre = '" + titre + "', image = '" + imageURL + "', description = '" + description + "', auteurId = '" + auteurId + "' WHERE articleId = '" + req.params.id + "' ;"),
        (err,result)=>{
            if(err) {
                res.send(err)
            } else {
                return res.redirect('/admin/liste-des-articles')
            }
        }
    } catch(err) {
        res.status(400).json({message:err})
    }
}