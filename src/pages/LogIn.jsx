import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import authQueries from "../services/authQueries";
import alerts from "../utils/alerts";


export const LogIn = () => {
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    const aux = { ...formData };
    aux[name] = value;
    setFormData(aux);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const aux = { ...formData };
    for (const key in aux) {
      if (!aux[key]) delete aux[key];
    }
    authQueries.login(aux).then((response) => {
      console.log(response);
      if (response.status == 200) {
        alerts.success("Welcome " + response.data.first_name);
        navigate("/");
      } else {
        alerts.warn(response.statusMsg);
      }
    });
  }

    return (
        <section className="bg-black">
            <div className="px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-5 flex flex-col">
                    <img
                        src="/MyTinerary.png"
                        alt="MyTinerary"
                        sizes="(max-width: 500px) 100vw, 500px"
                        className="h-[auto] w-[auto]"
                    ></img>
                </div>
                <form
                    onSubmit={handleSubmit}
                    onInput={handleInput}
                    className="lg:w-2/6 md:w-1/2 bg-[#2d2d38] rounded-lg p-8 flex flex-col w-full md:pt-0"
                >
                    <h2 className="text-white text-lg font-medium py-5">
                        Sign In
                    </h2>
                    <div className="relative pb-4">
                        <label className="text-white">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full bg-white rounded border border-gray-300 py-1 px-3"
                            required
                        ></input>
                    </div>
                    <div className="relative pb-4">
                        <label className="text-white">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="w-full bg-white rounded border border-gray-300 py-1 px-3"
                            required
                        ></input>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Sign In"
                            className="text-white bg-indigo-500 border-0 py-2 px-8  hover:bg-zinc-600 hover:text-black rounded text-lg"
                        ></input>
                    </div>
                    <Link to="/SignUp" className="text-xs text-gray-500 pt-3 underline">
                        Dont have an account yet? Sign Up
                    </Link>
                </form>
            </div>
        </section>
    );
};

export default LogIn;
