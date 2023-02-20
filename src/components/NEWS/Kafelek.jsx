import React from 'react'
import './Kafelek.scss'

const Kafelek = ({picture, text, copy}) => {
  return (
<div className="kafelek">
    <h3>{text} </h3>
    <p>{copy}</p>
    <img src={process.env.PUBLIC_URL + `/images/commercials/${picture}.jpg`} alt="" />
</div>
  )
}

export default Kafelek