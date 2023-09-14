
import { Home } from './components/layouts/Home/Home'
import { Portfolio } from './components/Portfolio/Portfolio'
import { Contact } from './components/Contact/Contact'
import { Propositos } from './components/Propositos/Propositos'
import { Routes, Route } from 'react-router-dom'
// import { Shop } from './components/Shop/Shop'
import AppMarket from './components/marketplace/appMarket'

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={ <Home/>}/ >
          <Route path='/portfolio' element={ <Portfolio/>}/ >
          <Route path='/contact' element={ <Contact/>}/ >
          <Route path='/propositos' element={ <Propositos/>}/ >
          <Route path='/shop' element={ <AppMarket/>}/ >
        </Routes>
    </>
  )
}

export default App
