import React, { useState } from "react";
import Modal from "react-modal";
import "./DownloadCV.css";

export default function DownloadCVSection() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDownload = () => {
    setModalIsOpen(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/2025-Ormenisa Andrei CV.pdf";
      link.download = "2025-Ormenisa Andrei CV.pdf";
      document.body.appendChild(link);
      //link.click();
      document.body.removeChild(link);
    }, 1000);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setProgress(0);
  };

  return (
    <div className="download-section">
      <button className="download-button" onClick={handleDownload}>
        Download CV
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2>Thank you for downloading my CV!</h2>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        {progress === 100 ? (
          <p className="download-complete">Download complete!</p>
        ) : (
          <p>Downloading... {progress}%</p>
        )}
        <button className="close-button" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
}
