import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Inicio</li>
        </Link>
        <Link to="/cliente">
          <li>Cliente</li>
        </Link>
        <Link to="/menu">
          <li>Menu</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
