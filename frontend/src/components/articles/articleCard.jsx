const ArticleCard = ({ article }) => {
  return (
    <a href={article.url}>
      <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center">
        <div className="w-40 h-40 bg-gray-200 rounded-lg mr-4 flex-shrink-0">
          <img
            className="w-full h-full object-cover"
            src={article.urlToImage}
          />
        </div>

        <div className="flex-grow">
          <h3 className="text-sm font-semibold py-1">{article.title}</h3>
          <p className="text-sm text-gray-600 py-1">{article.author}</p>
          <p className="text-xs text-gray-500 mt-1 py-1">
            {article.description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
