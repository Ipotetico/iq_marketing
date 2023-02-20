import React from 'react'
import Kafelek from './Kafelek';
import './News.scss'

const News = () => {
  return (
<div id='portfolio' className="news__container">
    <div className="portfolio__container" >
    <Kafelek picture='doritos2' text='Lorem Ipsum' copy='Proin sed risus hendrerit metus iaculis condimentum sit amet et tortor...'/>
    <Kafelek picture='misio' text='Dolor Sit Amet' copy='Proin porta cursus volutpat. Praesent interdum quis nisl vel dictum...'/>
    <Kafelek picture='heinz' text='Nulla sit' copy='Class aptent taciti sociosqu ad litora torquent per conubia nostra...'/>
    <Kafelek picture='hamburg' text='Maecenas eu varius eros' copy='Donec vulputate, leo eget sodales varius, mauris sapien porta dolor...'/>

    {/* *** */}

    <Kafelek picture='arnold' text='Lorem Ipsum' copy='Proin sed risus hendrerit metus iaculis condimentum sit amet et tortor...'/>
    <Kafelek picture='koszulka' text='Dolor Sit Amet' copy='Integer tristique felis volutpat, iaculis mauris at, malesuada elit...'/>
    <Kafelek picture='scarlet' text='Nulla sit' copy='Ed id volutpat libero, sed dapibus tortor rutrum commodo magna et volutpat...'/>
    <Kafelek picture='roses' text='Maecenas eu varius eros' copy='Morbi pharetra aliquam dolor, at tristique orci blandit sed. Quisque odio nunc...'/>

    {/* *** */}
    
        <Kafelek picture='samuel' text='Lorem Ipsum' copy='Proin sed risus hendrerit metus iaculis condimentum sit amet et tortor...'/>
    <Kafelek picture='chrupek' text='Dolor Sit Amet' copy='Integer tristique felis volutpat, iaculis mauris at, malesuada elit...'/>
    <Kafelek picture='murzyn' text='Nulla sit' copy='Ed id volutpat libero, sed dapibus tortor rutrum commodo magna et volutpat...'/>
    <Kafelek picture='bikepack' text='Maecenas eu varius eros' copy='Morbi pharetra aliquam dolor, at tristique orci blandit sed. Quisque odio nunc...'/>
    </div>

</div>
  )
}

export default News