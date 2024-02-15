import React from "react";
import { useNavigate } from "react-router-dom";

function LogIn(props) {

  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();

    if (event.target.username.value === 'user@gmail.com' && event.target.password.value === '123') {
      props.onLoginSuccess();
      navigate('/home');
    } else {
      navigate('/home');
    }
  };

  return (
    <div className="shadow-lg bg-slate-300 w-300 h-300">
      <form onSubmit={handleLogin} className="flex flex-col justify-center items-center h-screen ">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 sm:text-sm border rounded-md text-gray-700 dark:text-gray-300 dark:border-gray-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 sm:text-sm border rounded-md text-gray-700 dark:text-gray-300 dark:border-gray-600"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-md text-white sm:text-sm dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
        >
          Login
        </button>
      </form>
    </div>

  );
}

export default LogIn;