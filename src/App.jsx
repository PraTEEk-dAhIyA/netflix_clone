import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { Routes,Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path = '/' element = { <Home/>}/>
        <Route path = '/Login' element = { <Login/>}/>
        <Route path = '/player/:id' element={<Player/>}/>
      </Routes>
    </div>
  )
}

