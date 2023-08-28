import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/register", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/login")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
    <div className="signup">
      <div className="Container">
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
          className="Input"
        />
        <input
          type="email"
          placeholder="E-mail"
          id="email"
          onChange={handleChange}
          className="Input"
        />
         <input
          type="country"
          placeholder="Country"
          id="country"
          onChange={handleChange}
          className="Input"
        />
         <input
          type="city"
          placeholder="City"
          id="city"
          onChange={handleChange}
          className="Input"
        />
         <input
          type="phone"
          placeholder="Phone number"
          id="phone"
          onChange={handleChange}
          className="Input"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
          className="Input"
        />
        <button disabled={loading} onClick={handleClick} className="Button">
          Submit
        </button>
        <Link to="/login" className="navlo">Already a user?</Link>
        {error && <span>{error.message}</span>}
        
      </div>
    </div>
  );
};

export default Register;