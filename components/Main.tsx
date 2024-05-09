import React from 'react'

const Main = () => {
  return (
    <div>
      <header>
        <h1>Recipe Finder</h1>
        <h2>Find your favorite recipes here</h2>
      </header>
      <div>
        <input type="text" placeholder="Search..." />
        <i className="fa fa-search"></i>
      </div>
    </div>
  )
}

export default Main