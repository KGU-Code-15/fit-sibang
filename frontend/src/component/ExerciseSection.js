import React from "react";
import "../css/Exercise.css";
import { Route, Link, withRouter } from "react-router-dom";

function ExerciseSection() {
  return (
    <div className="mainLayout">
      <div className="rutin_page">
        <div className="rutin_pageFlex">
          <div className="rutin_pageInfo">
            <span>원하시는 운동을 선택하세요!</span>
            <div className="rutin__img">
              <div className="rutin__wrap">
                <img src="/img/spinal_twist.png" alt="health__image" />
                <p>요가 입문을 위한 기본 자세</p>
              </div>
              <div className="rutin__wrap">
                <Link to="/TeachableMachine">
                  <img src="/img/squat.jpg" alt="health__image" />
                  <p>25분 칼로리 버닝! 타바타 클래스</p>
                </Link>
              </div>
              <div className="rutin__wrap">
                <img src="/img/25.corpse-pose.png" alt="health__image" />
                <p>쉬면서 하는 요가 클래스</p>
              </div>
              <div className="rutin__wrap">
                <img src="/img/plank-pose.png" alt="health__image" />
                <p>하루 10분 플랭크!</p>
              </div>
              <div className="rutin__wrap">
                <img src="/img/lunge.png" alt="health__image" />
                <p>가볍게 시작하는 런지</p>
              </div>
              <div className="rutin__wrap">
                <img src="/img/childPose.jpg" alt="health__image" />
                <p>스트레스를 풀어주는 요가 자세 모음</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExerciseSection;
