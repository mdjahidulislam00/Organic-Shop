import 'react';
import { RxCross1 } from 'react-icons/rx';
import { FaMinus, FaPlus } from 'react-icons/fa';

const CartProductCard = ({ cartProduct ,increaseQuantity,decreaseQuantity, removeItem}) => {
    const { _id, name, img, price, quantity } = cartProduct;
    return (
        <div className='bg-slate-100 rounded-md'>
            <div className="flex my-5">
                <div className="basis-3/12 flex justify-center">
                    <img className='w-32 h-28 p-1 rounded-lg' src={img} alt="" />
                </div>
                <div className="basis-9/12 mt-2 px-3">
                    <div className="flex justify-between">
                        <div className="text-xl font-semibold">{name}</div>
                        <div className="text-lg font-semibold ">${quantity*price}</div>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        <div className="text-lg">
                            <div className="flex justify-center items-center border border-gray-500">
                                <div onClick={() => decreaseQuantity(_id)} className='px-2 py-1 cursor-pointer'> <FaMinus /> </div>
                                <div className='px-3 py-1 border-l-2 border-r-2 border-gray-500 text-xl font-bold'>{quantity}</div>
                                <div onClick={() => increaseQuantity(_id)} className='px-2 py-1 cursor-pointer'> <FaPlus /> </div>
                            </div>
                        </div>
                        <div onClick={() => removeItem(_id)} className="text-2xl text-red-600 cursor-pointer hover:text-red-400"> <RxCross1 /> </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProductCard;
