import React from "react"
import "../css/Support.css"
import TopHeader from "./TopHeader"
import Footer from "./Footer"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"

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
      <div className="Support">
        <h1>Q & A</h1>
        <div className="support-container">
          <h2>제목</h2>
          <div>내용</div>
        </div>
        <div className="form-wrapper">
          <input className="title-input" type="text" placeholder="제목" />
          <CKEditor
            editor={ClassicEditor}
            data=""
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor)
            }}
            onChange={(event, editor) => {
              const data = editor.getData()
              console.log({ event, editor, data })
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor)
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor)
            }}
          />
        </div>
        <button className="submit-button">입력</button>
      </div>
      <Footer />
    </div>
  )
}
