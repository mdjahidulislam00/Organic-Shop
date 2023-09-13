import  'react'
import CartProductCard from '../Component/CartProductCard'
import CartCard from '../Component/CartCard'

const CartPage = () => {
  return (
    <div className="bg-slate-200">
        <div className="container mx-auto flex gap-4">
            <div className="basis-8/12">
                <CartProductCard/>
            </div>
            <div className="basis-4/12">
                <CartCard />
            </div>
        </div>
    </div>
  )
}

export default CartPage