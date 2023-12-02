import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav className='Navbar'>
      <ul>
        <NavLink to='/query'>Query</NavLink>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
        <NavLink to='/404'>404</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
