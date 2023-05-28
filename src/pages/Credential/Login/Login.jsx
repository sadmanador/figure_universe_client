import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/UserContext/UserContext";
import Swal from "sweetalert2";
import { useTitle } from "../../../hooks/useTitle/useTitle";

const Login = () => {
  useTitle("Login");
  const [error, setError] = useState(null);
  const { signIn, signUpWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    setError(null);
    signUpWithGoogle()
      .then((result) => {
        const user = result.user;
        Swal.fire("Logged in!", "You are successfully logged in!", "success");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      return setError("Please insert a password of at least 6 characters");
    }

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        Swal.fire("Logged in!", `${user.email} successfully logged in!`, "success");
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-semibold mt-10">Login</h1>
      <div className="hero min-h-screen ">
        <div className="hero-content">
          <div className="card w-full shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link
                    to="/registration"
                    className="label-text-alt link link-hover text-blue-600"
                  >
                    New to Figure Universe?
                  </Link>
                </label>
              </div>
              <a className="form-control mt-6">
                <input
                  type="submit"
                  className="btn active normal-case"
                  value="Login"
                />
              </a>
            </form>
            <div className="text-center mb-4 flex justify-center">
              <button
                onClick={handleGoogleLogin}
                className="btn mr-4 normal-case tooltip tooltip-bottom"
                data-tip="Google"
              >
                Login with <FcGoogle className="text-2xl ml-1 inline" />
              </button>
            </div>
            {error && (
              <div className="text-center mb-4 flex justify-center">
                <p>
                  <span className="font-semibold">Error: </span>
                  <span className="text-red-500">{error}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
