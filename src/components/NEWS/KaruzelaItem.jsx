import React from 'react'
import './KaruzelaItem.scss'

const KaruzelaItem = ({picture, copy}) => {
  return (
<div className="karuzelaItem__container">
    <div className="image__container">
    <img src={process.env.PUBLIC_URL + `/images/commercials/${picture}.jpg`} alt="" />
    </div>
    <h4>{copy}</h4>
</div>
  )
}

export default KaruzelaItem