import { Link } from "react-router-dom";
import Button from './Button';
import {useState} from 'react'

const Navbar = () => {


  const [button,setButton] = useState(true);

  const handleButton =() => setButton(false);


  return (
    <>
      <nav className="Navbar">
        <p>Adventure Awaits</p>
        <ul>
          <li id="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li id="nav-item">
            <Link to="/adventures">Adventures</Link>
          </li>
          <li id="nav-item">
            <Link to="/destinations">Destinations</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
