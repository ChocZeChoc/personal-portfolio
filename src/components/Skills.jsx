import React from 'react'

function Skills(props) {
  return (
    <div>
        <div className="card">
            <img src={props.imgsrc} alt="skills_percent" className="skillimg"/>
            <h2>{props.name}</h2>
        </div>
    </div>
  )
}

export default Skills
