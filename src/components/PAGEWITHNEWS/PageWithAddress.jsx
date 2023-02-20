import React from 'react'
import Address from './Address';
import Case from './Case';
import './PageWithAddress.scss'
import './PageWithNews.scss'

const PageWithAddress = () => {
  return (
<div className="pageWithAddress__container">

<Case two picture="pizza" copy={<h3>Latin professor at Hampden-Sydney College in Virginia, <mark>looked up one of the more obscure Latin words</mark>, consectetur, from a Lorem Ipsum passage...</h3>}/>

    <div className="address__container">
<Address/>
    </div>
</div>
  )
}

export default PageWithAddress