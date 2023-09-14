import 'react'
import SliderCard from './SliderCard';
import imgData from '../assets/fakeData/products.json'

const SliderShow = () => {
  return (
    <SliderCard imgData={imgData}/>
  )
}

export default SliderShow