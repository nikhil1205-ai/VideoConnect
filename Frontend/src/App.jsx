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
        <Route path='/' element={<Landing/>}/>
        <Route path='/auth' element={<Athentication/>}/>
        <Route path='/:url' element={<VideoMeet/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/history' element={<History/>}/>
      </Routes>
     </AuthProvider>
    </BrowserRouter>
    </>
  )
}

export default App
