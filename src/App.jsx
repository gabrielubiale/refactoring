import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './Components/SideBar/Sidebar'
import Chapter1 from './Pages/Chapter1/Chapter1'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="mainContainer">
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/chapter-1" element={<Chapter1 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
