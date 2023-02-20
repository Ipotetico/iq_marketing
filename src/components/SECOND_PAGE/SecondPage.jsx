import React from 'react'
import './SecondPage.scss'

const SecondPage = ({movie, text}) => {
  return (
<div className="secondPage__container">
    <video muted loop autoPlay src={process.env.PUBLIC_URL + `/movies/${movie}`}></video>
    <h1 className="title">
{text}
<br />
<br />
            <a href="/" className="readMore">więcej</a>
    </h1>

</div>
  )
}

export default SecondPage