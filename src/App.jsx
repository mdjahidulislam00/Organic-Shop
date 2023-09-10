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
        <Route path="*" element={ <HomePage/>} />
        <Route path="/shop" element={ <Shop/>} />
        <Route path="/order" element={ <CheckeOut/>} />
        <Route path="/admin" element={ <AdminPage/>} />
        <Route path="/cart" element={ <ProductCheckOutCard/>} />
        <Route path="/signUp" element={ <SignUpPage/>} />
        <Route path="/productDetails" element={ <ProductDetails/>} />
      </Routes>
      <Footer/>
   </div>
  )
}

export default App