import { Blog, Features, Footer, Header, WhatGPT3, Possibility } from './containers'
import { CTA, Brand, Navbar } from './components'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='gradient__bg'>
        <Header />
      </div>
      <Brand />

      <WhatGPT3 />

      <Features />

      <Possibility />

      <div className='gradient__bg'>
        <CTA />

        <Blog />
      </div>

      <Footer />
    </div>
  )
}

export default App
