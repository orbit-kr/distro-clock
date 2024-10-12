import React from "react";
import "./Unknown.scss";
import { useNavigate } from "react-router-dom";

const UNKNOWN = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="not-found-page">
      <div className="not-found-div">
        <div className="not-found-message">
          <h1>페이지를 찾을 수 없습니다.</h1>
          <p>방금 전 그 배포판이 여기 있었던 것 같은데... 아쉽네요!</p>
          <p>
            이곳은 404 페이지입니다. 길을 잃으셨다면 아래 버튼을 눌러주세요.
          </p>
        </div>
        <div className="not-found-bottom-div">
          <button className="bottom-button" onClick={handleGoHome}>
            홈으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default UNKNOWN;
