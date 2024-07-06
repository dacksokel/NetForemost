import React, { useState, useEffect } from "react";
import ArticleCard from "./articleCard";
import Pagination from "../pagination";
import DataJson from "../dataJson";
import AddArticle from "./add"

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:1200/articles?page=${page}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data.articles);
        setTotalPages(data.totalPages);
        setPage(data.page);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching data: " + error.message);
        setLoading(false);
      });
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">{error}</h1>
        <div className="max-w-md mx-auto">
          <DataJson />
        </div>
      </div>
    );
  }

  if (loading) {
    return <>loading....</>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Articles List</h1>
        <AddArticle/>
      <div className="max-w-md mx-auto">
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Articles;
