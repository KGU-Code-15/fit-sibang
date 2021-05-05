import React from "react"

import ExerciseSection from "./ExerciseSection"
import TopHeader from "./TopHeader"

function Exercise() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TopHeader />
      <ExerciseSection />
    </div>
  )
}

export default Exercise
