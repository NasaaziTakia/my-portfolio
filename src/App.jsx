import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Home from './assets/Pages/Home'
import Portfolio from './assets/Pages/Portfolio'
import ProjectDetails from './assets/Pages/ProjectDetails'
import Toolkit from './assets/Pages/Toolkit'  
import Contact from './assets/Pages/Contact'

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
        </Routes>
      </Router>
    </>
  )
}

export default App


