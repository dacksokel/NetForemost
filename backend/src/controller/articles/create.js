const ArticleMethods = require("../../methods/articles");

module.exports = async (req, res) => {
  const body = req.body;

  if (!Array.isArray(req.body)) {
    const article = await ArticleMethods.create(body);
    if (!article.error) {
      return res.status(200).json({ article });
    }
    return res.status(400).json({ error: article.error });
  }

  const articles = {};
  for (const article of body) {
    const newArticle = await ArticleMethods.create(article);
    if (!newArticle.error) {
      if (articles["success"] === undefined) {
        articles["success"] = [];
      }
      articles["success"].push(newArticle);
    } else {
      if (articles["error"] === undefined) {
        articles["error"] = [];
      }
      articles["error"].push(newArticle);
    }
  }

  return res.status(200).json({
    success: {
      articles: articles["success"],
      total: articles["success"]?.length ?? 0,
    },
    error: {
      articles: articles["error"],
      total: articles["error"]?.length ?? 0,
    },
  });
};
