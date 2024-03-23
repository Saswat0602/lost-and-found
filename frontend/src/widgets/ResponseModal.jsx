import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "react-modal";
import "../css/feed.css";
import axios from "axios";
import { ProjectCotext } from "../Context/ProjectCotext";
Modal.setAppElement("#root");

const ResponseModal = (Question) => {
  const { showResponseModal, setResponseModal } = ProjectCotext();
  const [answer, setAnswer] = useState("")
  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };
  const handleSubmit=()=>{

  }
  return (
    <div>
      <Modal
        isOpen={showResponseModal}
        onRequestClose={() => {
          setResponseModal(false);
        }}
        style={{
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
            zIndex: 1000,
            width: "400px",
            height: "200px",
          },
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          },
        }}
      >
        <div className="modal-content">
          <h4 className="text-center">Q.{Question.Question}</h4>
          <input
            type="text"
            className="p-1 border rounded-lg w-[280px] ml-10 mt-4"
            name="answer"
            placeholder="Enter the Answer"
            value={answer}
            onChange={handleAnswer}
          />
          <div className="flex justify-around mt-4">
            <button
              className="py-2 px-4 rounded-md bg-red-400 hover:bg-red-500 text-white"
              onClick={() => setResponseModal(false)}
            >
              Cancel
            </button>
            <button
              className="bg-blue-400 py-2 px-4 rounded-md hover:bg-blue-500 text-white"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ResponseModal;