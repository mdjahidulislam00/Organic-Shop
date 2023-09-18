import  'react'
import CartProductCard from '../Component/CartProductCard'
import CartCard from '../Component/CartCard'
import useCart from '../Component/CartCRUDHandeling'

const CartPage = () => {
  const { cart, handleGetCart } = useCart();

  const saveCartData = handleGetCart()
  console.log(saveCartData)
  return (
    <div className="bg-slate-200">
        <div className="container mx-auto flex gap-4">
            <div className="basis-8/12">
              { saveCartData &&
                saveCartData.map((cartProduct)=> (<CartProductCard key={cartProduct.id} cartProduct={cartProduct}/>))
              }
            </div>
            <div className="basis-4/12">
                <CartCard />
            </div>
        </div>
    </div>
  )
}

export default CartPage