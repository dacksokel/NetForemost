import React, { useState } from "react";
import Modal from "react-modal";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

Modal.setAppElement("#root");

const AddArticle = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [author, setAuthor] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [url, setUrl] = useState(null);
  const [urlToImage, setUrlToImage] = useState(null);
  const [publishedAt, setPublishedAt] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const article = {
      author,
      title,
      description,
      url,
      urlToImage,
      publishedAt,
    };
    fetch("http://localhost:1200/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    })
      .then((response) => response.json())
      .then((data) => window.location.reload())
      .catch((error) => console.error(error));
  }

  return (
    <div className="max-w-md mx-auto">
      <Button onClick={openModal}>add new articles</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Article"
      >
        <Card className="max-w-md mx-auto" color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Add New Article
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Author
              </Typography>
              <Input
                size="lg"
                placeholder="Pedro Zanches or www.ELTIEMPO.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => setAuthor(e.target.value)}
              />

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                title
              </Typography>
              <Input
                size="lg"
                placeholder="strong wind"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Description
              </Typography>
              <Input
                size="lg"
                placeholder="description simple"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => setDescription(e.target.value)}
              />

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                url
              </Typography>
              <Input
                size="lg"
                placeholder="www.eltiempo.com/url"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => setUrl(e.target.value)}
              />

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                urlToImage
              </Typography>
              <Input
                size="lg"
                placeholder="https://eltiempo.com/imagen"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => setUrlToImage(e.target.value)}
              />

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                publishedAt
              </Typography>
              <Input
                type="date"
                size="lg"
                placeholder="Select a date"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => setPublishedAt(e.target.value)}
              />
            </div>
            <div className="flex justify-center mt-6">
              <Button onClick={handleSubmit} className="mr-4">
                Create
              </Button>
              <Button onClick={closeModal}>Cancel</Button>
            </div>
          </form>
        </Card>
      </Modal>
    </div>
  );
};

export default AddArticle;
