import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">SignIn</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        
      </ul>
    </nav>
  );
}

export default Navigation;
