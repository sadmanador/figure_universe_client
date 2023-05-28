import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/UserContext/UserContext";
import { useTitle } from "../../../hooks/useTitle/useTitle";

const Registration = () => {
  useTitle("Registration");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { signUp, updateInfo, signUpWithGoogle,updateUserProfile } = useContext(AuthContext);

  const handleGoogleRegister = () => {
    setError(null);
    signUpWithGoogle()
      .then((result) => {
        const user = result.user;
        Swal.fire("Logged in!", `${user.email} successfully registered!`, "success");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    setError(null);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const displayName = form.name.value;
    const photoURL = form.photo.value;
    const info = {
      displayName,
      photoURL,
    };

    if (password.length < 6) {
      return setError("Please insert a password of at least 6 characters");
    }

    //creating an user
    signUp(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile(info)
          .then()
          .catch((error) => setError(error.message));
        form.reset();
        Swal.fire("Logged in!", `${user.email} successfully registered!`, "success");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-semibold mt-10">Registration</h1>
      <div className="hero min-h-screen ">
        <div className="hero-content">
          <div className="card w-full shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                required
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                required
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                required
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                required
                  name="photo"
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link
                    to="/login"
                    className="label-text-alt link link-hover text-blue-600"
                  >
                    Already have an account?
                  </Link>
                </label>
              </div>
              <a className="form-control mt-6">
                <input
                  type="submit"
                  className="btn active normal-case"
                  value="Register"
                />
              </a>
            </form>
            <div className="text-center mb-4 flex justify-center">
              <button
                onClick={handleGoogleRegister}
                className="btn mr-4 normal-case tooltip tooltip-bottom"
                data-tip="Google"
              >
                Register with <FcGoogle className="text-2xl ml-1 inline" />
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

export default Registration;
