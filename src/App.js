import "./styles.css";
import React, { useState } from "react";

function Button() {
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked(!liked);
  };
  return (
    <button
      onClick={handleLike}
      style={{ fontSize: "24px", cursor: "pointer" }}
      className="btn"
    >
      <i
        className={liked ? "fa-solid fa-heart r1" : "fa-regular fa-heart r1"}
        style={{ color: liked ? "#E53888" : "#E53888", marginRight: "8px" }}
      ></i>
    </button>
  );
}
function Post() {
  return (
    <>
      <div className="comment">
        <span className="content">here</span>
        <Button />
      </div>
    </>
  );
}

export default function App() {
  return <Post />;
}
