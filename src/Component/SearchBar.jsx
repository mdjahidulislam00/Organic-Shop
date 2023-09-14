import 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
  return (
    <div className="flex justify-center border-purple-900">
        <form className="flex items-center">
        <input
            type="text"
            placeholder="Search..."
            className="lg:w-72 h-12 p-2 text-lg rounded-l-md border-blue-500 appearance-none bg-white border-none text-gray-700 leading-tight focus:outline-none"
            value=""
        />
        <button
            type="submit"
            className="lg:w-12 h-12 flex justify-center items-center text-lg text-white rounded-r-lg bg-purple-800 hover:bg-purple-700 border-purple-500 "
        >
            <span><FaSearch /></span>
        </button>
        </form>
  </div>
  )
}

export default SearchBar