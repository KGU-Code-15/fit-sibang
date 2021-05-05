import React from "react"
import "../css/Products.css"
import TopHeader from "./TopHeader"
import { Route, Link, withRouter } from "react-router-dom"
import { ProductData } from "./ProductData"

export default function Products(props) {
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
      {ProductData.map((item, index) => {
        return (
          <div key={index} className={item.cName}>
            <div class="wrapper">
              <div class="card">
                <div class="product-left">
                  <div class="header">
                    <h2>
                      {item.number}, {item.title}
                    </h2>
                  </div>
                  <div class="product-main">
                    <p>{item.explanation}</p>
                  </div>
                  <div class="product-details">
                    <div class="product-total">
                      <h3>{item.price}</h3>
                    </div>
                  </div>
                </div>
                <div class="product-right">
                  <img src={item.image} />
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
