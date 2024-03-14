import './App.css'
import Like from './components/Like'
import Main from './components/Main'
import Nav from './components/Navbar'
import Selects from './components/Selects'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Nav />
      <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/like' element={<Like />} />
      <Route path='/selects' element={<Selects />} />
    </Routes>
    </>
  )
}

export default App
