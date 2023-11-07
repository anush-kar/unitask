import '../App.css';

export default function Navbar() {

    return (
      <nav className="navbar">
        <div className="logo">Unitask</div>
          <ul className="nav-links">
             {/* <li><a href="/About">About</a></li>
              <li><a href="#">Profile</a></li>*/}
              <li><a href="#">Logout</a></li>
              <li><a href="/Signup">Signup</a></li>
              <li><a href="/Login">Login</a></li>

          </ul>
      </nav>
    );
  }