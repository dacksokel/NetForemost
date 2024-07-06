const ArticlesModel = require("../../model/articles");

module.exports = async (limit, pageNumber) => {
  if (limit === undefined && pageNumber === undefined) {
    return await ArticlesModel.find().sort({ createdAt: -1 });
  }

  return await ArticlesModel.find()
    .sort({ createdAt: -1 })
    .skip((pageNumber - 1) * limit)
    .limit(limit);
};
