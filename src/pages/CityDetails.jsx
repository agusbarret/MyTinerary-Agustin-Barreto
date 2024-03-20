import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getCityById } from "../services/citiesQueries";

const CityDetails = () => {
    const params = useParams();
    const [city, setCity] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        getCityById(params.id)
            .then((res) => {
                if (res._id) {
                    setCity(res);
                } else {
                    alert("City not available.");
                    navigate("/Cities");
                }
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        );
    }

    return (
        <>
            <div className="bg-opacity-[70%] bg-[#2f2f3d]">
                <div className="flex px-6 pt-6">
                    <Link
                        to={"/Cities/"}
                        className="rounded font-bold text-[20px] bg-[#2d2d38] bg-opacity-[70%] p-1"
                    >
                        Return to Cities
                    </Link>
                </div>
                <section className="pb-[80px] flex justify-center pt-[80px]">
                    <div className="flex bg-[#2d2d38] bg-opacity-[70%] rounded-[8px] pl-[20px] pb-[10px] pt-[10px] pr-[25px]">
                        <div className="flex flex-col">
                            <h1 className="text-[48px] font-bold">
                                {city.name}
                            </h1>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col pb-[80px] pt-[80px] bg-[#2f2f3d] bg-opacity-[80%]">
                    <div className="flex flex-col w-[100%] max-w-[1280px] mr-[auto] ml-[auto] pr-[32px] pl-[32px]">
                        <div className="flex flex-col items-center gap-[20px]">
                            <h3
                                className="text-[30px] font-bold rounded-[6px] border-[2px] bg-white"
                            >
                                {city.country}
                            </h3>
                            <h3
                                className="text-[30px] font-bold bg-white rounded-[6px] border-[2px]"
                            >
                                {city.language}
                            </h3>
                            <h3
                                className="text-[30px] font-bold bg-white rounded-[6px] border-[2px]"
                            >
                                {city.currency}
                            </h3>
                            <h3
                                className="text-[30px] font-bold bg-white rounded-[6px] border-[2px]"
                            >
                                {city.description}
                            </h3>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default CityDetails;
