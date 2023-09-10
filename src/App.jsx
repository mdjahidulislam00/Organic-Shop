import  'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import AdminPage from './pages/AdminPage'
import Shop from './Component/Shop'
import ProductDetails from './Component/ProductDetails'
import CheckeOut from './Component/CheckeOut'
import ProductCheckOutCard from './Component/ProductCheckOutCard'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
   <div>
      <Header />
      <Routes>
        <Route path="/home" element={ <HomePage/>} />
      </Routes>
      <Footer/>
   </div>
  )
}

export default App