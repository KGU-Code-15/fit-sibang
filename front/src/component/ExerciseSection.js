import React from "react"
import "../css/Exercise.css"
import { Link } from "react-router-dom"

function ExerciseSection() {
  return (
    <div className="mainLayout">
      <div className="rutin_page">
        <div className="rutin_pageFlex">
          <div className="rutin_pageInfo">
            <div className="rutin__img">
              <div className="rutin__wrap">
                <img src="/img/plank.gif" alt="health__image" />
              </div>
              <div className="rutin__wrap">
                <Link to="/Squat">
                  <img src="/img/squat.gif" alt="health__image" />
                </Link>
              </div>
              <div className="rutin__wrap">
                <Link to="/Warrior">
                  <img src="/img/warrior.png" alt="health__image" />
                </Link>
              </div>
              <div className="rutin__wrap">
                <img src="/img/good-mornings.gif" alt="health__image" />
              </div>
              <div className="rutin__wrap">
                <img src="/img/lunges.gif" alt="health__image" />
              </div>
              <div className="rutin__wrap">
                <img src="/img/hammer-curls.gif" alt="health__image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExerciseSection
