import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";

function Write() {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const diary = {
      date: new Date().toLocaleDateString(),
      content,
    };
    ``
    const diaries = JSON.parse(localStorage.getItem("diaries") || "[]");
    diaries.push(diary);
    localStorage.setItem("diaries", JSON.stringify(diaries));
    navigate("/");
  };

  return (
      <div>
        <h2>
          <Header />
          ✍️ 일기 작성 페이지입니다
        </h2>
        <form onSubmit={handleSubmit}>
        <textarea
            placeholder="일기를 입력하시오"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            cols={50}
        />
          <br />
          <button type="submit">저장</button>
        </form>
      </div>
  );
}

export default Write;
