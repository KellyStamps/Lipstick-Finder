import React from 'react'

const Navbar = ({handleLogin, user, handleFavorite}) => {
  return (
    <ul className='navbar'>
      <h1>Lipstick Finder</h1>
      {user ? 
        <div className='userInfo'>
        <h3>Welcome {user}!</h3>
        <h4 onClick={handleFavorite}>💜My Favorites 💜</h4 >
        </div>
      :
      <form onSubmit={handleLogin}>
        <input type='text' id='username' placeholder='Username'/>
        <input type='password' id='password' placeholder='Password'/>
        <input type='submit' value='Login'/>
      </form>}
    </ul>
  )
}

export default Navbar