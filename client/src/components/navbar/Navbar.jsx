import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext,useNavigate } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { loading, error, dispatch } = useContext(AuthContext);

  // const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    // navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">BOOKINZO</span>
        </Link>
        {user ? (<div className="navItems">
          <span className="after">{user.username}</span>
          <button  onClick={handleClick} className="navButton" >Signout</button></div>
        ) : (
          <div className="navItems">
            <div className="hamb"><span className="ham"></span><span className="ham"></span><span className="ham"></span></div>
            <Link to="/register" className="navButton">Signup</Link>
            <Link to="/login" className="navButton">Signin</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
