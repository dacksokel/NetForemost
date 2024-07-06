const ArticleMethods = require("../../methods/articles");

module.exports = async (req, res) => {
  const pageNumber = parseInt(req.query.page) || 1;
  const limit = 3

  const parsedPageNumber = parseInt(pageNumber, 10);

  const totalArticles = await ArticleMethods.count();

  if (isNaN(parsedPageNumber) || parsedPageNumber < 1) {
    return res
      .status(400)
      .send("Invalid skip. Skip should be a non-negative number.");
  }

  const articles = await ArticleMethods.get(limit, pageNumber)
  if (articles.length === 0) return res.status(404).send("No articles found");
  
  return res.status(200).json({
    articles,
    totalPages: Math.ceil(totalArticles / limit),
    page: pageNumber
  });
};
