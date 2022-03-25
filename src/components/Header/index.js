import { Link } from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <nav className='navbar'>
      <ul className='ul-list'>
          <li className='nav-link'>
              <Link className='route-link' to="/">Home</Link>
          </li>
          <li className='nav-link'>
              <Link className='route-link' to="/about">About</Link>
          </li>
          <li className='nav-link'>
              <Link className='route-link' to="/contact">Contact</Link>
          </li>
      </ul>
    </nav>
  )
}
export default Header