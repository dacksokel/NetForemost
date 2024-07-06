const ArticlesModel = require("../../model/articles");

module.exports = async (article) => {
    try {
        const newArticle = new ArticlesModel(article);
        await newArticle.save();
        return newArticle;
    } catch (error) {
        return {error, article}
    }
}
