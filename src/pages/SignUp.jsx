import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllCountries } from "../services/countriesQueries";
import authQueries from "../services/authQueries";
import alerts from "../utils/alerts";

function SignUp() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        country: "",
    });

    const [countries, setCountries] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllCountries().then(setCountries);
    }, []);

    function handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        const aux = { ...formData };
        aux[name] = value;
        setFormData(aux);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        const aux = { ...formData };
        for (const key in aux) {
            if (!aux[key]) delete aux[key];
        }
        authQueries.register(aux).then((res) => {
            if (res.status == 201) {
                alerts.success("Account successfully created! Welcome to MyTinerary");
                navigate("/login");
            } else {
                alerts.warn(res.statusMsg);
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
                    onInput={handleInput}
                    onSubmit={handleSubmit}
                    className="lg:w-2/6 md:w-1/2 bg-[#2d2d38] rounded-lg p-8 flex flex-col w-full md:pt-0"
                >
                    <h2 className="text-white text-lg font-medium py-5">
                        Sign Up
                    </h2>
                    <div className="relative pb-4">
                        <label className="text-white">First Name</label>
                        <input
                            type="text"
                            name="first_name"
                            className="w-full bg-white rounded border border-gray-300 py-1 px-3"
                            required
                        ></input>
                    </div>
                    <div className="relative pb-4">
                        <label className="text-white">Last Name</label>
                        <input
                            type="text"
                            name="last_name"
                            className="w-full bg-white rounded border border-gray-300 py-1 px-3"
                            required
                        ></input>
                    </div>
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
                    <div className="relative pb-4">
                        <label className="text-white">
                            Select your country
                        </label>
                        <select
                            name="country"
                            className="w-full bg-white rounded border border-gray-300 py-1 px-3"
                            defaultValue={formData.country}
                            required
                        >
                            {countries.length > 0 &&
                                countries.map((country) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className="relative pb-4">
                        <label className="text-white">URL Image</label>
                        <input
                            type="text"
                            name="image"
                            className="w-full bg-white rounded border border-gray-300 py-1 px-3"
                        ></input>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Register Now!"
                            className="text-white bg-indigo-500 border-0 py-2 px-8  hover:bg-zinc-600 hover:text-black rounded text-lg"
                        ></input>
                    </div>
                    <Link to="/LogIn" className="text-xs text-gray-500 pt-3 underline">
                        Already have an account? Sign In
                    </Link>
                </form>
            </div>
        </section>
    );
}
export default SignUp;
