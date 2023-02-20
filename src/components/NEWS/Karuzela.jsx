import React from 'react'
import './Karuzela.scss'
import KaruzelaItem from './KaruzelaItem';

const Karuzela = () => {
  return (
    <>
    <div className="news__container__2">
    <p>news</p>
<div className="karuzela__container">
    <div className="arrow">
        <img src={process.env.PUBLIC_URL + `/images/strzalka.svg`} alt="" />
    </div>
    <div className="items__container">
    <KaruzelaItem picture="tatko" copy="Konkurs Złote Spinacze rozstrzygnięty!  Mamy  pierwszą statuetkę   SREBRNEGO SPINACZA za kampanię LOVE OVER HATE dla marki ABSOLUT. "/>
        <KaruzelaItem picture="uber" copy="Nagrody KTR rozdane! Mamy brązowy miecz w kat. Craft Audio/Video za film “Posłuchaj Bieszczad” dla marki  Ostoya"/>
            <KaruzelaItem picture="panienki" copy="W konkursie KREATURA nominowano nas za kampanię Małe rzeczy są Big w kategorii Digital, social media. Małe nominacje są BIG! "/>

               </div>
                   <div style={{transform:"rotate(180deg)"}} className="arrow">
                           <img src={process.env.PUBLIC_URL + `/images/strzalka.svg`} alt="" />
                   </div>
</div>
</div>
</>
  )
}

export default Karuzela