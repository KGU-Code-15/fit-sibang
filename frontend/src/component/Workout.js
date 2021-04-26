import React, { useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Route, Link } from "react-router-dom";

import "../css/Workout.css";
function Workout({ history }) {
  const date = new Date();
  const [exerlist, setExerlist] = useState(["pushup", "pushup", "pushup"]);
  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="explainWrap">
      <div className="explainFlex">
        <div className="explain">
          <ArrowBackIcon
            onClick={goBack}
            style={{ color: "white", cursor: "pointer" }}
          />

          <p>
            {date.getFullYear()}년&nbsp;
            {date.getMonth() + 1}월&nbsp;
            {date.getDate()}일
          </p>
          <p>1. 카메라 권한 허용해주세요.</p>
          <p>2. 디바이스를 사용자 앞으로 놓아주세요.</p>
          <p>3. 화면에 신체가 잘 인식되도록 서주세요.</p>
          <p>4. 카운터와 사용자 카메라가 실행되면 '운동하기'를 클릭하세요.</p>
          <Link to="TeachableMachine">
            <button>운동하기</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Workout;
