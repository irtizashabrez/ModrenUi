import './App.css';
import { Navbar, CTA, Brand } from './components';
import { Footer, Blog, Possibility, Feature, Header, WhatGPT3 } from './containers';
function App() {
  return (
    <div className="App">
      <div className='gradient_bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Feature/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
