import React from 'react'
import Menu from './components/MENU/Menu';
import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage'
import './scss/reset.scss'
import './App.scss'
import Banner from './components/BANNER/Banner';
import SecondPage from './components/SECOND_PAGE/SecondPage';
import BlankPage from './components/BLANK/BlankPage';
import News from './components/NEWS/News';
import PageWithNews from './components/PAGEWITHNEWS/PageWithNews';
import PageWithAddress from './components/PAGEWITHNEWS/PageWithAddress';

const App = () => {


  return (
<>

<Menu/>

<Banner/>
<Fullpage>
  <FullpageNavigation/>
  <FullPageSections>
  <FullpageSection style={{height:'100vh'}}>
<BlankPage/>
</FullpageSection>
  <FullpageSection style={{height:'100vh'}}>
<SecondPage movie='Jacobs.mp4' text={<h1>It was popularised in the <mark>1960s with the release of Letraset sheets containing Lorem Ipsum</mark> passages, and more recently with desktop publishing software like Aldus PageMaker.</h1>}/>
</FullpageSection>
  <FullpageSection>
<SecondPage movie='Platnosci.mp4' text={<h1>It has survived not only five centuries. <mark>It uses over 200 Latin words,</mark> The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</h1>}/>
</FullpageSection>
<FullpageSection >
  <News/>
</FullpageSection>
<FullpageSection >
<PageWithNews/>
</FullpageSection>
<FullpageSection >
<PageWithAddress/>
</FullpageSection>
</FullPageSections>
</Fullpage>
</>
  )
}

export default App