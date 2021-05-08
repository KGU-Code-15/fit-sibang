import React, { useState, useEffect, useRef } from "react"
import "../css/ProgressBar.css"

const ProgressBar = (props) => {
  const [offset, setOffset] = useState(0)

  const {
    size,
    progress,
    strokeWidth,
    circleOneStroke,
    circleTwoStroke,
  } = props

  const center = size / 2
  const radius = size / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference
    setOffset(progressOffset)
  }, [setOffset, progress, circumference, offset])

  return (
    <div>
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
        ></circle>
        <text x={center} y={center} className="percentage">
          {progress}
        </text>
      </svg>
    </div>
  )
}

export default ProgressBar
