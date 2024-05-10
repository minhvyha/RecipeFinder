import React from 'react'

const Main = () => {
  return (
    <div className='flex justify-center flex-col items-center w-full py-8 gap-2 '>
      <header className='text-center flex flex-col gap-2'>
        <h1 className='text-3xl'>Recipe Finder</h1>
        <h2>Find your favorite recipes here</h2>
      </header>
      <div className="">
        <input type="text" placeholder="Search..." />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  )
}

export default Main