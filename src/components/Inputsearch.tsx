
import { FaSearch } from "react-icons/fa";

const SearchComponent = () => {
  return (
    <a href="#" className="flex items-center px-2 py-3 my-2 outline outline-1 outline-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-body-base">
      <input
        type="text"
        placeholder="Cari di sini"
        className="block py-2 px-3 mr-2 w-10/12 focus:outline-none"
      />
      <FaSearch className="text-primary-theme cursor-pointer" size={20} />
    </a>
  );
};

export default SearchComponent;
