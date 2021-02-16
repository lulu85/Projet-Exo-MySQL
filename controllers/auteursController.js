//GET - AFFICHE LA LISTE DES AUTEURS
exports.getAuteursPage = async (req,res)=>{
    const listeDesAuteurs = await querysql('SELECT * FROM auteur;')
    //console.log('articles :',listeDesArticles[0].titre);
    res.render('auteurs',{auteurs: listeDesAuteurs})
}

//GET - AFFICHE UN AUTEUR
exports.getAuteurSinglePage = async (req,res)=>{
    const id = req.params.id
    const auteurSingle = await querysql("SELECT * FROM auteur WHERE auteurId = '" +id+ "';")
    res.render('auteurSingle', {auteur : auteurSingle[0]})
}

