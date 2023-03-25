import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';


import Contact from './components/contact/Contact';
function App() {
  return (
   <>
<Sidebar />
<main className='main'>
  <Home />
  <About />
  <Contact />
</main>

   </>
  );
}

export default App;
