import React from "react"
import "../css/Support.css"
import TopHeader from "./TopHeader"
import Footer from "./Footer"

export default function Support() {
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
      <div>Board</div>
      <Footer />
    </div>
  )
}
