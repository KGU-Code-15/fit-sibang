import React from "react"
import * as AiIcons from "react-icons/ai"
import * as BiIcons from "react-icons/bi"
import * as GrIcons from "react-icons/gr"
import * as GiIcons from "react-icons/gi"
import * as IoIcons from "react-icons/io5"

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Challenge",
    path: "/",
    icon: <GiIcons.GiAchievement />,
    cName: "nav-text",
  },
  {
    title: "Exercise",
    path: "/exercise",
    icon: <BiIcons.BiDumbbell />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/",
    icon: <GrIcons.GrProductHunt />,
    cName: "nav-text",
  },
  {
    title: "My page",
    path: "/mypage",
    icon: <IoIcons.IoPersonCircleSharp />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <BiIcons.BiSupport />,
    cName: "nav-text",
  },
]
