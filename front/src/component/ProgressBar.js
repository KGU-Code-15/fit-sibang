import React, { useState, useEffect } from "react"
import "../css/ProgressBar.css"

const ProgressBar = (props) => {
  const [offset, setOffset] = useState(0)

  const { size, progress, strokeWidth, circleOneStroke, circleTwoStroke } =
    props

  const center = size / 2
  const radius = size / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    const progressOffset = ((20 - props.count) / 20) * circumference
    setOffset(progressOffset)
    console.log("useEffect")
  }, [setOffset, props.count, circumference, offset])

  return (
    <div style={{ position: "absolute", top: "2%", left: "1%" }}>
      <svg className="circularChart" width={size} height={size}>
        <circle
          className="circularBg"
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        ></circle>
        <circle
          className="circle"
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90, ${center}, ${center})`}
        ></circle>
        <text x={center} y={95} className="percentage">
          {props.count}
        </text>
      </svg>
    </div>
  )
}

export default ProgressBar
