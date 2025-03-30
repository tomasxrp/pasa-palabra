import React from "react";

function NavBarPrincipal() {
  return (
    <nav className="fixed top-0 w-full border-gray-200 bg-gray-900 black dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Utalca.svg/1200px-Utalca.svg.png"
            className="h-12"
            alt="Logo universidad de talca"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            ICC Team
          </span>
        </a>
        <div className="group relative">
          <button className="p-1"> {/* Reduce el padding del botón */}
            <svg
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 hover:scale-110 duration-200 hover:stroke-blue-500" // Reduce el tamaño del ícono
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </button>
          <span
            className="absolute -top-14 left-[50%] -translate-x-[50%] 
            z-20 origin-left scale-0 px-1 rounded-lg border 
            border-gray-300 bg-white py-2 text-sm font-bold
            shadow-md transition-all duration-300 ease-in-out 
            group-hover:scale-100"
          >
            GitHub
          </span>
        </div>
      </div>
    </nav>
  );
}

export default NavBarPrincipal;