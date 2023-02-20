import React from 'react'
import './PageWithAddress.scss'

const Address = () => {
  return (
    <>
    <div style={{alignSelf:'flex-end'}} className="">
<h4>IQ Marketing</h4>
<p>ul. Wiktorii Wiedeńskiej 17 <br /> 02-954 Warszawa <br /> NIP 525-10-22-800 <br /> tel.  +48 22 543 29 00 <br />fax +48 22 543 29 90</p>
</div>

<div className="">

</div>

<div style={{alignSelf:'flex-end', justifySelf:'flex-end'}} className="">
    <p style={{fontSize:'calc(4px + 0.5vw)', fontWeight:'400'}}>&#169; IQ Marketing 2023</p>
    <p style={{fontSize:'calc(4px + 0.5vw)', fontWeight:'400'}}>Polityka prywatności</p>
</div>
</>
  )
}

export default Address