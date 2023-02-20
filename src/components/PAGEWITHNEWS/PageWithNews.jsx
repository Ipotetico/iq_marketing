import React from 'react'
import Karuzela from '../NEWS/Karuzela';
import Case from './Case';
import './PageWithNews.scss'

const PageWithNews = () => {
  return (
<div className="pageWithNews__container">
    <div className="news__container">
        <Karuzela/>
    </div>
<Case picture="ruda" copy={<h3>Latin professor at Hampden-Sydney College in Virginia, <mark>looked up one of the more obscure Latin words</mark>, consectetur, from a Lorem Ipsum passage...</h3>}/>
</div>
  )
}

export default PageWithNews