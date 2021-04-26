import React from 'react'
import '../css/App.css'

function Menubar() {
  //logout handler

  return (
    <div className="sidebox">
      <div className="menuLogo">
        <span>핏-</span>
        <span className="title">시방</span>
      </div>

      <div className="menuFlex">
        <div className="menuListF">
          <span>홈</span>
        </div>
        <div className="menuList">
          <span>챌린지</span>
        </div>
        <div className="menuList">
          <span>운동</span>
        </div>
        <div className="menuList">
          <span>상품</span>
        </div>
        <div className="menuListL">
          <span>마이페이지</span>
        </div>
      </div>
    </div>
  )
}

export default Menubar
