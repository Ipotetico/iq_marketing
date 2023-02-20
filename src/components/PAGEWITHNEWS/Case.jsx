import React from 'react'
import './Case.scss'

const Case = ({picture, copy, two}) => {
  return (
    <div className={two ? "case__container two" : "case__container"}>
        <img src={process.env.PUBLIC_URL + `/images/commercials/${picture}.jpg`} alt="" />
        <h3>{copy}</h3>
    </div>
  )
}

export default Case