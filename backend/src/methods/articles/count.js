const ArticlesModel = require("../../model/articles");

module.exports = async () => {
    try {
        const count = await ArticlesModel.countDocuments({});
        return count;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
