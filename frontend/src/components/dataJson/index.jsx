import React, { useState } from "react";
import Modal from "react-modal";
import { Button } from "@material-tailwind/react";

Modal.setAppElement("#root");

const DataJson = () => {
  const [file, setFile] = useState(null);
  const [articles, setArticles] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleFileChange = (e) => {
    //   setFile(e.target.files[0]);
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      console.log("e.target.result", JSON.parse(e.target.result));
      setArticles(JSON.parse(e.target.result));
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(articles);
    fetch("http://localhost:1200/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(articles),
    })
      .then((response) => response.json())
      .then((data) => window.location.reload())
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Button onClick={openModal}>Agregar data.json</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Agregar data.json"
      >
        <form onSubmit={handleSubmit}>
          <input type="file" accept=".json" onChange={handleFileChange} />
          <Button type="submit">Agregar data.json</Button>
        </form>
      </Modal>
    </div>
  );
};
export default DataJson;
