const ArticleMethods = require("../../methods/articles");

module.exports = async (req, res) => {
  const pageNumber = parseInt(req.query.page) || 1;
  const limit = 3

  if (limit === undefined && pageNumber === undefined) {
    return res.status(200).json({
      articles: await ArticleMethods.get(),
    });
  }
  const parsedLimit = parseInt(limit, 10);
  const parsedPageNumber = parseInt(pageNumber, 10);

  const totalArticles = await ArticleMethods.count();

  if (isNaN(parsedLimit) || parsedLimit < 1 || parsedLimit > totalArticles) {
    return res
      .status(400)
      .send("Invalid limit. Limit should be a number between 1 and 100.");
  }

  if (isNaN(parsedPageNumber) || parsedPageNumber < 1) {
    return res
      .status(400)
      .send("Invalid skip. Skip should be a non-negative number.");
  }

  return res.status(200).json({
    articles: await ArticleMethods.get(limit, pageNumber),
    totalPages: Math.ceil(totalArticles / limit),
    page: pageNumber
  });
};
