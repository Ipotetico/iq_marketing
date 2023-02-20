import React from 'react'
import './Banner.scss'

const Banner = () => {
  return (
<div className="banner__container">
    <video muted autoPlay loop src={process.env.PUBLIC_URL + '/movies/biuro_2.mp4'}></video>
    <h1 className="title">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</h1>
</div>
  )
}

export default Banner