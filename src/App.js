import React from 'react';
import styled from 'styled-components';
import {ParallaxProvider} from 'react-scroll-parallax'
import Header from './container/header';
import SectionOne from './container/sectionOne';
import SectionTwo from './container/sectionTwo';
import SectionThree from './container/sectionThree';
import Footer from './container/footer';

const AppWrapper = styled.div`
  width: 100%;
  padding: 10px;
  @media (min-width: 1080px){
    max-width: 1080px;
    margin: 0 auto;
    padding: 20px;
  }
`

function App() {
  return (
    <ParallaxProvider>
      <AppWrapper className="App">
        <Header/>
        <SectionOne y={[-40,20]} x={[-20,0]}/>
        <SectionTwo y={[-20,10]} x={[-20,0]}/>
        <SectionThree y={[-40,10]} x={[-20,0]}/>
        <Footer/>
      </AppWrapper>
    </ParallaxProvider>
  );
}

export default App;
