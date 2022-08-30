import "./WorkCardStyles.css"
import React from 'react'
import { NavLink } from "react-router-dom"

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="image" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p> {props.text}</p>
        <div className="pro-btns">
          <a href="https://manavnanda.ml/myproject/" target="_blank" className="btn">View</a>
          <a href="https://github.com/ManavNanda1/MyEcomWeb" target="_blank" className="btn">Source</a>
        </div>
      </div>
    </div>
  )
}

export default WorkCard