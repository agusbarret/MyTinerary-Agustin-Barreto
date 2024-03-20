import { useState, useEffect, useRef } from "react";
import { getCities } from "../services/citiesQueries";
import { Link } from "react-router-dom";

const Cities = () => {
    const [cities, setCities] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const inputSearch = useRef(null);

    useEffect(() => {
        getCities().then((data) => {
            setCities(data.data);
            setFiltered(data.data);
        });
    }, []);
    console.log(filtered);

    const handleInput = () => {
        const aux = filterByName(cities, inputSearch.current.value);
        setFiltered(aux);
    };
    
    const filterByName = (listCities, value) => {
        return listCities.filter((city) =>
            city.name.toLowerCase().startsWith(value.toLowerCase())
        );
    };

    return (
        <>
            <section className="pt-[140px] pb-[140px] bg-no-repeat opacity-[100%] bg-cover bg-center bg-[url('planepaper.jpg')]">
                <div className="mr-[auto] ml-[auto] sm:pr-[24px] pr-[24px] md:pr-[32px] sm:pl-[24px] pl-[24px] md:pl-[32px] max-w-[1280px] bg-[#2d2d38] bg-opacity-[71%] shadow-xl rounded-[12px]">
                    <div className="flex flex-col gap-[72px]">
                        <div className="flex flex-col items-stretch sm:items-center justify-center gap-[20px] py-5 ">
                            <p className="text-center max-w-[640px] text-[24px] font-semibold text-white">
                                Search your favorite destinations
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-[12px] pb-[10px]">
                                <section className="flex grow flex-col gap-5 justify-center items-center">
                                    <search className="w-full flex justify-center">
                                        <input
                                            type="text"
                                            name="city_name"
                                            className="w-3/4 rounded text-black border border-black"
                                            onInput={handleInput}
                                            ref={inputSearch}
                                        ></input>
                                    </search>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-[140px] pb-[140px] flex flex-col bg-[#2d2d38] bg-opacity-[80%]">
                <div className="flex flex-wrap justify-center bg-[#2d2d38] ">
                    {filtered.length > 0 &&
                        filtered.map((city) => (
                            <div
                                key={city._id}
                                className="flex-shrink-0 w-64 p-4"
                            >
                                <div className="bg-white shadow-lg rounded-lg p-6">
                                    <img
                                        src={city.image}
                                        alt={city.name}
                                        className="w-full h-40 object-cover mb-4 rounded"
                                    />
                                    <h2 className="text-xl font-semibold mb-2">
                                        {city.name}
                                    </h2>
                                    <p className="text-gray-700 mb-4">
                                        {city.country}
                                    </p>
                                    <Link
                                    to={"/cities/" + city._id}
                                    className="underline text-blue-500">See more
                                    </Link>
                                </div>
                            </div>
                        ))}
                </div>
            </section>
        </>
    );
};

export default Cities;
