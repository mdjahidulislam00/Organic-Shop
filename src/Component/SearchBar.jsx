import 'react'

const SearchBar = () => {
  return (
    <div className="flex justify-center h-20 bg-gray-200 border-b-2 border-purple-900">
        <form className="flex items-center">
        <input
            type="text"
            placeholder="Search..."
            className="lg:w-96 h-12 p-2 text-lg rounded-l-md border-blue-500 appearance-none bg-white border-none text-gray-700 leading-tight focus:outline-none"
            value=""
        />
        <button
            type="submit"
            className="lg:w-32 h-12 p-2 text-lg lg:text-lg text-white rounded-r-md bg-purple-800 hover:bg-purple-700 border-purple-500 "
        >
            Search
        </button>
        </form>
  </div>
  )
}

export default SearchBar