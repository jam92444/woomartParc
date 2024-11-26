import { useContext, useState } from "react";
import { ShopContext } from "../context/AppContext";
import { toast } from "react-toastify";

const Login = () => {
  const [active, setActive] = useState("Sign In");
  const { user, setUser, navigate } = useContext(ShopContext);
  const [signUp, setSignUp] = useState({
    email: "",
    userName: "",
    password: "",
  });
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (active === "Sign Up") {
      setSignUp((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      setSignIn((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (active === "Sign Up") {
      if (signUp.email && signUp.userName && signUp.password) {
        setUser(signUp);
        navigate("/");
      } else {
        console.error("Please fill all fields");
      }
    } else {
      if (signIn.email && signIn.password) {
        setSignIn(signIn);
        const foundUser = user.find(
          (item) => item.email === signIn.email && item.password === signIn.password
        );
        if (foundUser) {
          console.log("user Found");
        }else{
          console.error('please enter correct username/password')
        }
      } else {
        console.error("Please fill all fields");
      }
    }
  };

  const renderUsernameField = () => {
    if (active === "Sign Up") {
      return (
        <div>
          <label
            htmlFor="userName"
            className="block text-sm font-medium text-gray-900"
          >
            Username
          </label>
          <div className="mt-2">
            <input
              id="userName"
              name="userName"
              type="text"
              required={active === "Sign Up"}
              value={signUp.userName}
              onChange={handleChange}
              autoComplete="username"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            />
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="http://localhost:3000/static/media/logo.0381a7270bca2e47586b3487401e06f4.svg"
            className="mx-auto w-[200px] h-10"
          />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSignUp} className="space-y-6">
            {renderUsernameField()}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={active === "Sign Up" ? signUp.email : signIn.email }
                  onChange={handleChange}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={active === "Sign Up" ? signUp.password : signIn.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {active}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <a
              href="#"
              onClick={() =>
                setActive(active === "Sign In" ? "Sign Up" : "Sign In")
              }
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              {active === "Sign Up" ? "Sign In" : "Sign Up"}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
