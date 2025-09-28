import './App.css'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import Section1 from './components/main/section1/section1.jsx'
import Section2 from './components/main/section2/section2.jsx'
import Section3 from './components/main/section3/section3.jsx'
import Section4 from './components/main/section4/section4.jsx'
import Section5 from './components/main/section5/section5.jsx'
import Section6 from './components/main/section6/section6.jsx'
function App() {

  return (
    <div className='body'>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>
    </div>
  )
}

export default App
