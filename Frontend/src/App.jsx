import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Landing from './pages/Landing.jsx'
import Athentication from './pages/Authentication.jsx'
import { AuthProvider  } from './contexts/AuthContext.jsx'
import VideoMeet from './pages/VideoMeet.jsx'
import Home from './pages/Home.jsx'
import History from './pages/History.jsx'

function App() {
  return (
    <>
    <BrowserRouter>
     <AuthProvider>
      <Routes>
        <Route path='https://videoconnect-qgb9.onrender.com/' element={<Landing/>}/>
        <Route path='https://videoconnect-qgb9.onrender.com/auth' element={<Athentication/>}/>
        <Route path='https://videoconnect-qgb9.onrender.com/:url' element={<VideoMeet/>}/>
        <Route path='https://videoconnect-qgb9.onrender.com/home' element={<Home/>}/>
        <Route path='https://videoconnect-qgb9.onrender.com/history' element={<History/>}/>
      </Routes>
     </AuthProvider>
    </BrowserRouter>
    </>
  )
}

export default App
