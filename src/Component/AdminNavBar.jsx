import "react"
import { FaPlusCircle } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


const AdminNavBar = () => {
 
  return (
    <nav className="w-full bg-purple-600 p-4 sticky top-20 z-30">
    <div className="container mx-auto flex items-center">
      <ul className="flex space-x-4 items-center">
       <Link to='/manageProducts' > <li className="flex items-center border rounded-md p-1 hover:bg-purple-300">
          <a href="#" className="text-white text-sm mr-2">
            Manage Products{" "}
          </a>
          <span className="text-white text-xl">
            <FaGear />
          </span>
        </li> </Link>
        <Link to='/addProduct' ><li className='flex items-center border rounded-md p-1 hover:bg-purple-300'>
          <a href="#" className="text-white text-sm mr-2">
            AddProduct{" "}
          </a>
          <span className="text-white text-xl">
            <FaPlusCircle />
          </span>
        </li></Link>
      </ul>
    </div>
  </nav>
  )
}

export default AdminNavBar