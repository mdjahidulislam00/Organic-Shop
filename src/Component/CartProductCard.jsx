import 'react'
import { RxCross1 } from 'react-icons/rx'
import { FaMinus, FaPlus } from 'react-icons/fa'

const CartProductCard = () => {
  return (
    <div className='bg-slate-100 rounded-md'>
        <div className="flex my-5">
            <div className="basis-3/12 flex justify-center">
                <img className='w-32 h-28 p-1 rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt6XBxwNmnaOywoIfGaAz3Wbl3IC8TkRgV6g&usqp=CAU" alt="" />
            </div>
            <div className="basis-9/12 mt-2 px-3">
                <div className="flex justify-between">
                    <div className="text-xl font-semibold">Sheker pro max</div>
                    <div className="text-lg font-semibold ">$640</div>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <div className="text-lg">
                        <div className="flex justify-center items-center border border-gray-500">
                            <div className='px-2 py-1'> <FaMinus /> </div>
                            <div className='px-3 py-1 border-l-2 border-r-2 border-gray-500 text-xl font-bold'>1</div>
                            <div className='px-2 py-1'> <FaPlus /> </div>
                        </div>
                    </div>
                    <div className="text-2xl text-red-700 "> <RxCross1 /> </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartProductCard