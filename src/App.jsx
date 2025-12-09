import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Home from './assets/Pages/Home'
import Portfolio from './assets/Pages/Portfolio'
import ProjectDetails from './assets/Pages/ProjectDetails'
import Toolkit from './assets/Pages/Toolkit'  
import Contact from './assets/Pages/Contact'
import OtherProjectDetail from './assets/Pages/OtherProjectDetail'

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/portfolio/projectDetails' element={<ProjectDetails />} />
          <Route path='/mytools' element={<Toolkit/>} />
          <Route path='/contact' element={<Contact />} />
           <Route path="/portfolio/OtherProjectDetail" element={<OtherProjectDetail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App


